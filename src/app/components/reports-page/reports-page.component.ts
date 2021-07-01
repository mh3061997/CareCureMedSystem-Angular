import { Component, OnInit } from '@angular/core';
import * as Highstock from "highcharts/highstock";
import { Options, SeriesOptionsType } from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HC_exporting_DATA from "highcharts/modules/export-data";

HC_exporting(Highstock);
HC_exporting_DATA(Highstock);

@Component({
   selector: 'app-reports-page',
   templateUrl: './reports-page.component.html',
   styleUrls: ['./reports-page.component.css']
})
export class ReportsPageComponent implements OnInit {

   data = [{
      name: 'Surgery',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]


   }, {
      name: 'Dermatology',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]

   }, {
      name: 'Plastic Surgery',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]

   }, {
      name: 'Nutrition',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]

   }, {
      name: 'Internal Medicine',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]

   }, {
      name: 'Obstetrics',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]

   }, {
      name: 'Dentistry',
      data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654, 677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]

   },];


   highcharts = Highstock;

   chartOptions: Options = {
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
         // zoomEnabled:true,
         scrollbar: { enabled: true, minWidth: 800 },
         categories: [
            "Jan-2017", "Feb-2017", "Mar-2017", "Apr-2017", "May-2017", "Jun-2017", "Jul-2017", "Aug-2017", "Sep-2017", "Oct-2017", "Nov-2017", "Dec-2017",
            "Jan-2021", "Feb-2021", "Mar-2021", "Apr-2021", "May-2021", "Jun-2021", "Jul-2021", "Aug-2021", "Sep-2021", "Oct-2021", "Nov-2021", "Dec-2021",
            "Jan-2022", "Feb-2022", "Mar-2022", "Apr-2022", "May-2022", "Jun-2022", "Jul-2022", "Aug-2022", "Sep-2022", "Oct-2022", "Nov-2022", "Dec-2022"
            , "Jan-2023", "Feb-2023", "Mar-2023", "Apr-2023", "May-2023", "Jun-2023", "Jul-2023", "Aug-2023", "Sep-2023", "Oct-2023", "Nov-2023", "Dec-2023"


         ],
         crosshair: true,

         min: 0,
         max: 11
      },
      yAxis: {

         title: {
            text: "Income (EGP)"
         }
      },
      series: <SeriesOptionsType[]>this.data,
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

   constructor() { }

   ngOnInit() {
   }
}
