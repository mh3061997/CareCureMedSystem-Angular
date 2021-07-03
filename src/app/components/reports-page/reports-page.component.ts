import { Component, OnInit } from '@angular/core';
import * as Highstock from "highcharts/highstock";
import { Options, SeriesOptionsType } from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HC_exporting_DATA from "highcharts/modules/export-data";
import { HttpClient } from '@angular/common/http';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

HC_exporting(Highstock);
HC_exporting_DATA(Highstock);

@Component({
   selector: 'app-reports-page',
   templateUrl: './reports-page.component.html',
   styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

   monthlySpecialitiesIncome: any[];
   rebased:any[];
   highcharts = Highstock;

   chartOptions: Options;
   constructor(private http: HttpClient, private servUtils: ServUtilitiesService) {

      this.http.get<any>("http://localhost:8080/reports/monthlySpecialitiesIncome").subscribe((data) => {
         this.monthlySpecialitiesIncome = data;
         console.log(this.monthlySpecialitiesIncome);
         this.rebased = this.createArray();
        console.log(this.rebased);
        

         this.chartOptions = {
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
                  '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
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
               ceiling:50000
            },
            series: <SeriesOptionsType[]>this.rebased,
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
         

      });

   }
   createArray() {
      const rebased: any[] = [];
      const specialities = this.servUtils.specialities;
      specialities.forEach((specialitiy) => {

         let obj = {
            name: specialitiy,
            data: this.monthlySpecialitiesIncome
               .filter((entry) => entry.speciality == specialitiy)
               .map((entry) => { return [ Date.parse(entry.date), entry.total] })
         }
         if(obj.data.length)
         rebased.push(obj);
      })
   return rebased;
   }
   ngOnInit() {
   }
}

