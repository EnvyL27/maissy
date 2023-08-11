import { Component, OnInit, ViewChild } from '@angular/core';
import { CountService } from '../services/count.service';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ChartOptions } from './chart';
import { forkJoin } from 'rxjs';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-cilt',
  templateUrl: './cilt.component.html',
  styleUrls: ['./cilt.component.css']
})
export class CiltComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions!: Partial<ChartOptions> | any;
  public chartDonus!: Partial<ChartOptions> | any;
  public chartPerBulan!: Partial<ChartOptions> | any;
  public chartResume!: Partial<ChartOptions> | any;

  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  public loaddata: any;
  deskripsi: any = 'Loading..';

  dataPengecekan: object = [];
  dataMaxCycle: object = [];
  maxCycle: any = [];
  totalPengecekan: any = [];
  activePlan: any = [];
  ExpiredPlan: any = [];
  curCycle: any = [];

  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.spinner.show();
    this.loaddata = await this.loaddata;
    var count = 0;
    this.loaddata = new Promise(resolve => {
      var a = setInterval(() => {
        count++;
        this.spinner.hide();
        this.resolved = true;
        if (count = 1) {
          clearInterval(a);
        }
      }, 100);
    });

    this.service.getCurrentCycle().subscribe(data => {
      this.dataMaxCycle = data;
      Object.values(this.dataMaxCycle).forEach(data => {
        // // //////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        for (let i = 0; i < array.length; i++) {
          this.maxCycle.splice(this.maxCycle.lenght, 0, array[i]);
        }
        console.log(this.maxCycle);

      })
    });

    this.service.getCiltOci1().subscribe(data => {
      console.log(data);
      this.dataPengecekan = data;
      Object.values(this.dataPengecekan).forEach(data => {
        // // //////console.log(data);
        var array = Object.keys(data).map(function (key) {
          return data[key];
        });
        console.log(this.dataPengecekan);

        for (let i = 0; i < array.length; i++) {
          this.totalPengecekan.splice(this.totalPengecekan.length, 0, array[i]);
        }
        for (let i = 0; i < this.totalPengecekan.length; i++) {
          console.log(i);


        }
        console.log(this.totalPengecekan);

      })
    });


    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top', // This places the data labels on top of the bars
          },
          borderRadius: 10,
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Preparation",
          "IBF",
          "Label Area",
          "Caser Area"
        ]
      }

    }

    this.chartDonus = {
      series: [44, 55, 41, 17],
      chart: {
        type: "donut",
        height: 400,
        dropShadow: {
          enabled: true,
          color: "#111",
          top: -1,
          left: 3,
          blur: 3,
          opacity: 0.2
        }
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true
              }
            }
          }
        }
      },
      labels: ["Preparation",
      "IBF",
      "Label Area",
      "Caser Area"],
      dataLabels: {
        dropShadow: {
          blur: 3,
          opacity: 0.8
        }
      },
      fill: {
        type: "pattern",
        opacity: 1,
        pattern: {
          enabled: true,
          style: [
            "verticalLines",
            "squares",
            "horizontalLines",
            "circles",
            "slantedLines"
          ]
        }
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
      theme: {
        palette: "palette2"
      },
      title: {
        text: "Favourite Movie Type"
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartPerBulan = {
      series: [
        {
          name: "Revenue",
          data: [76, 85, 101, 98]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26]
        }
      ],
      chart: {
        type: "bar",
        height: 600
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "2020",
          "2021",
          "2022",
          "2023",
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
    };

    this.chartResume = {
      series: [
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 75]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 80]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 34]
        }
      ],
      chart: {
        type: "bar",
        height: 600
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Preparation",
          "Filling",
          "Blow",
          "Label",
          "Caser",
        ]
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      fill: {
        opacity: 1
      },
    };

  }


}



