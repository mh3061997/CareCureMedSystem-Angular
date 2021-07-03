import { Component, OnInit } from '@angular/core';
import * as Highstock from "highcharts/highstock";
import { Options, SeriesOptionsType } from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HC_exporting_DATA from "highcharts/modules/export-data";
import { HttpClient } from '@angular/common/http';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';
import { EnumInventoryOrderType } from 'src/app/enums/enum-inventory-order-type.enum';
import { ServReportsService } from 'src/app/services/serv-reports.service';

HC_exporting(Highstock);
HC_exporting_DATA(Highstock);

@Component({
   selector: 'app-reports-page',
   templateUrl: './reports-page.component.html',
   styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

   monthlySpecialitiesIncome: any[];
   monthlySpecialitiesCount: any[];
   monthlyInventoryInOut: any[];
   yearSpecialitiesPercentageCount: any[];
   yearSpecialitiesPercentageIncome: any[];

   monthlySpecialitiesIncomeReformatted: any[];
   monthlySpecialitiesCountReformatted: any[];
   monthlyInventoryInOutReformatted: any[];
   yearSpecialitiesPercentageCountReformatted: any[];
   yearSpecialitiesPercentageIncomeReformatted: any[];

   highcharts = Highstock;

   monthlySpecialitiesIncomeOptions: Options;
   monthlySpecialitiesCountOptions: Options;
   monthlyInventoryOptions: Options;
   yearSpeciailitiesCountOptions: Options;
   yearSpecialitiesIncomeOptions: Options;

   constructor(private servUtils: ServUtilitiesService, private servReports: ServReportsService) {

      this.servReports.getReports().subscribe((allReports) => {

         this.monthlySpecialitiesIncome = allReports.monthlySpecialitiesIncome;
         this.monthlySpecialitiesCount = allReports.monthlySpecialitiesCount;
         this.monthlyInventoryInOut = allReports.monthlyInventoryInOut;
         this.yearSpecialitiesPercentageCount = allReports.yearSpecialitiesPercentageCount;
         this.yearSpecialitiesPercentageIncome = allReports.yearSpecialitiesPercentageIncome;

         // console.log(this.monthlySpecialitiesIncome);
         // console.log(this.monthlySpecialitiesCount);
         // console.log(this.monthlyInventoryInOut);
         // console.log(this.yearSpecialitiesPercentageCount);
         // console.log(this.yearSpecialitiesPercentageIncome);

         this.monthlySpecialitiesIncomeReformatted = this.createMonthlySpecialitiesIncomeArray();
         this.monthlySpecialitiesCountReformatted = this.createMonthlySpecialitiesCountArray();
         this.monthlyInventoryInOutReformatted = this.createMonthlyInventoryInOutArray();
         this.yearSpecialitiesPercentageCountReformatted = this.createYearSpecialitiesDonutArray(this.yearSpecialitiesPercentageIncome);
         this.yearSpecialitiesPercentageIncomeReformatted = this.createYearSpecialitiesDonutArray(this.yearSpecialitiesPercentageCount);

         // console.log(this.monthlySpecialitiesIncomeReformatted);
         // console.log(this.monthlySpecialitiesCountReformatted);
         // console.log(this.monthlyInventoryInOutReformatted);
         // console.log(this.yearSpecialitiesPercentageCountReformatted);
         // console.log(this.yearSpecialitiesPercentageIncomeReformatted);

         this.monthlySpecialitiesIncomeOptions = {
            exporting: {
               enabled: true,
               chartOptions: { // specific options for the exported image
                  plotOptions: {
                     series: {
                        dataLabels: {
                           enabled: false
                        }
                     }
                  }
               },
               scale: 1,
               fallbackToExportServer: true
            },
            tooltip: {
               headerFormat: '<span style="font-size:20px;">{point.key}</span><table style="">',
               pointFormat: '<tr><td style="font-size:15px;font-weight:bold;color:{series.color};padding:0">{series.name}</td>' +
                  '<td style="padding:0"><b>{point.y:.1f} EGP</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true
            },
            chart: {
               type: "column", zoomType: 'x'
            },
            title: {
               text: "Monthly Specialities Income"
            },

            xAxis: {
               zoomEnabled: true,
               scrollbar: { enabled: true, minWidth: 800 },
               type: 'datetime',
               dateTimeLabelFormats: { // don't display the dummy year
                  month: '%m-%Y',
                  year: '%m-%Y',
               },

               crosshair: true,

               // min: Date.UTC(2020, 4, 12),
               // max: Date.UTC(2030, 4, 12)
            },
            yAxis: {

               title: {
                  text: "Income (EGP)"
               },
               ceiling: 50000
            },
            series: <SeriesOptionsType[]>this.monthlySpecialitiesIncomeReformatted,
            plotOptions: {

               column: {
                  pointPadding: 0.2,
                  borderWidth: 0
               },
               series: {
                  marker: {
                     radius: 10,
                  },
               },

            },

            navigation: {

               buttonOptions: {
                  enabled: true,
                  align: 'right',
                  verticalAlign: 'top',
                  y: 0
               }
            },

         };

         this.monthlySpecialitiesCountOptions = {
            exporting: {
               enabled: true,
               chartOptions: { // specific options for the exported image
                  plotOptions: {
                     series: {
                        dataLabels: {
                           enabled: false
                        }
                     }
                  }
               },
               scale: 1,
               fallbackToExportServer: true
            },
            tooltip: {
               headerFormat: '<span style="font-size:20px;">{point.key}</span><table style="">',
               pointFormat: '<tr><td style="font-size:15px;font-weight:bold;color:{series.color};padding:0">{series.name}</td>' +
                  '<td style="padding:5px"><b>{point.y}</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true
            },
            chart: {
               type: "column", zoomType: 'x'
            },
            title: {
               text: "Monthly Specialities Appointments Count"
            },

            xAxis: {
               zoomEnabled: true,
               scrollbar: { enabled: true, minWidth: 800 },
               type: 'datetime',
               dateTimeLabelFormats: { // don't display the dummy year
                  month: '%m-%Y',
                  year: '%m-%Y',
               },

               crosshair: true,

               // min: Date.UTC(2021, 1, 1)
            },
            yAxis: {

               title: {
                  text: "Number of appointments"
               },
               ceiling: 50000
            },
            series: <SeriesOptionsType[]>this.monthlySpecialitiesCountReformatted,
            plotOptions: {

               column: {
                  pointPadding: 0.2,
                  borderWidth: 0
               },
               series: {
                  marker: {
                     radius: 10,
                  },
               },

            },

            navigation: {

               buttonOptions: {
                  enabled: true,
                  align: 'right',
                  verticalAlign: 'top',
                  y: 0
               }
            },

         };

         this.monthlyInventoryOptions = {
            exporting: {
               enabled: true,
               chartOptions: { // specific options for the exported image
                  plotOptions: {
                     series: {
                        dataLabels: {
                           enabled: false
                        }
                     }
                  }
               },
               scale: 1,
               fallbackToExportServer: true
            },
            tooltip: {
               headerFormat: '<span style="font-size:20px;">{point.key}</span><table style="">',
               pointFormat: '<tr><td style="font-size:15px;font-weight:bold;color:{series.color};padding:0">{series.name}</td>' +
                  '<td style="padding:5px"><b>{point.y:.1f} EGP</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true
            },
            chart: {
               type: "column", zoomType: 'x'
            },
            title: {
               text: "Monthly Inventory Report"
            },

            xAxis: {
               zoomEnabled: true,
               scrollbar: { enabled: true, minWidth: 800 },
               type: 'datetime',
               dateTimeLabelFormats: { // don't display the dummy year
                  month: '%m-%Y',
                  year: '%m-%Y',
               },

               crosshair: true,

               // min: Date.UTC(2020, 4, 12),
               // max: Date.UTC(2030, 4, 12)
            },
            yAxis: {

               title: {
                  text: "Total (EGP)"
               },

            },
            series: <SeriesOptionsType[]>this.monthlyInventoryInOutReformatted,
            plotOptions: {

               column: {
                  pointPadding: 0.2,
                  borderWidth: 0
               },
               series: {
                  marker: {
                     radius: 10,
                  },
               },

            },

            navigation: {

               buttonOptions: {
                  enabled: true,
                  align: 'right',
                  verticalAlign: 'top',
                  y: 0
               }
            },

         };

         this.yearSpeciailitiesCountOptions = {
            exporting: {
               enabled: true,
               chartOptions: { // specific options for the exported image
                  plotOptions: {
                     series: {
                        dataLabels: {
                           enabled: false
                        }
                     }
                  }
               },
               scale: 1,
               fallbackToExportServer: true
            },
            tooltip: {
               headerFormat: '<span style="font-size:20px;">{point.key}</span><table style="">',
               pointFormat: '<tr><td style="font-size:15px;font-weight:bold;color:{series.color};padding:0">{series.name}</td>' +
                  '<td style="padding:5px"><b>{point.y:.1f} %</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true
            },
            accessibility: {
               point: {
                  valueSuffix: '%'
               }
            },
            chart: {
               plotShadow: false,
               type: 'pie'
            },
            title: {
               text: "This Year's Specialities Number Of Appointments Breakdown"
            },

            navigation: {

               buttonOptions: {
                  enabled: true,
                  align: 'right',
                  verticalAlign: 'top',
                  y: 0
               }
            },
            series: this.yearSpecialitiesPercentageCountReformatted
         };

         this.yearSpecialitiesIncomeOptions = {
            exporting: {
               enabled: true,
               chartOptions: { // specific options for the exported image
                  plotOptions: {
                     series: {
                        dataLabels: {
                           enabled: false
                        }
                     }
                  }
               },
               scale: 1,
               fallbackToExportServer: true
            },
            tooltip: {
               headerFormat: '<span style="font-size:20px;">{point.key}</span><table style="">',
               pointFormat: '<tr><td style="font-size:15px;font-weight:bold;color:{series.color};padding:0">{series.name}</td>' +
                  '<td style="padding:5px"><b>{point.y:.1f} %</b></td></tr>',
               footerFormat: '</table>',
               shared: true,
               useHTML: true
            },
            accessibility: {
               point: {
                  valueSuffix: '%'
               }
            },
            chart: {
               plotShadow: false,
               type: 'pie'
            },
            title: {
               text: "This Year's Specialities Income Breakdown"
            },

            navigation: {

               buttonOptions: {
                  enabled: true,
                  align: 'right',
                  verticalAlign: 'top',
                  y: 0
               }
            },
            series: this.yearSpecialitiesPercentageIncomeReformatted
         };

      });

   }
   createMonthlySpecialitiesIncomeArray() {
      let reformatted: any[] = [];
      const specialities = this.servUtils.specialities;
      specialities.forEach((specialitiy) => {

         let obj = {
            name: specialitiy,
            data: this.monthlySpecialitiesIncome
               .filter((entry) => entry.speciality == specialitiy)
               .map((entry) => { return [Date.parse(entry.date), entry.total] })
         }
         if (obj.data.length)
            reformatted.push(obj);
      })
      return reformatted;
   }
   createMonthlySpecialitiesCountArray() {
      let reformatted: any[] = [];
      const specialities = this.servUtils.specialities;
      specialities.forEach((specialitiy) => {

         let obj = {
            name: specialitiy,
            data: this.monthlySpecialitiesCount
               .filter((entry) => entry.speciality == specialitiy)
               .map((entry) => { return [Date.parse(entry.date), entry.count] })
         }
         if (obj.data.length)
            reformatted.push(obj);
      })
      return reformatted;
   }
   createMonthlyInventoryInOutArray() {
      let reformatted: any[] = [];
      Object.values(EnumInventoryOrderType).forEach((orderType) => {

         let obj = {
            name: orderType,
            data: this.monthlyInventoryInOut
               .filter((entry) => entry.type == orderType)
               .map((entry) => { return [Date.parse(entry.date), entry.total] })
         }
         if (obj.data.length)
            reformatted.push(obj);
      })
      return reformatted;
   }
   createYearSpecialitiesDonutArray(array: any[]) {
      let reformatted: any[] = [];
      const specialities = this.servUtils.specialities;
      let obj = {
         name: "Specialities",
         colorByPoint: true,
         data: new Array()
      }
      specialities.forEach((specialitiy) => {
         let specialitiyEntry = array.find((entry) => { return entry.speciality == specialitiy });


         obj.data.push({ name: specialitiy, y: specialitiyEntry ? specialitiyEntry.percentage : 0 });


      })

      reformatted.push(obj);
      return reformatted;
   }

   ngOnInit() {
   }

}

// Highcharts.chart('container', {
//    chart: {
//       plotBackgroundColor: null,
//       plotBorderWidth: null,
//       plotShadow: false,
//       type: 'pie'
//    },
//    title: {
//       text: 'Browser market shares in January, 2018'
//    },
//    tooltip: {
//       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//    },
//    accessibility: {
//       point: {
//          valueSuffix: '%'
//       }
//    },
//    plotOptions: {
//       pie: {
//          allowPointSelect: true,
//          cursor: 'pointer',
//          dataLabels: {
//             enabled: true,
//             format: '<b>{point.name}</b>: {point.percentage:.1f} %'
//          }
//       }
//    },
series: [{
   name: 'Brands',
   colorByPoint: true,
   data: [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
   }, {
      name: 'Internet Explorer',
      y: 11.84
   }, {
      name: 'Firefox',
      y: 10.85
   }, {
      name: 'Edge',
      y: 4.67
   }, {
      name: 'Safari',
      y: 4.18
   }, {
      name: 'Sogou Explorer',
      y: 1.64
   }, {
      name: 'Opera',
      y: 1.6
   }, {
      name: 'QQ',
      y: 1.2
   }, {
      name: 'Other',
      y: 2.61
   }]
}]
// });
