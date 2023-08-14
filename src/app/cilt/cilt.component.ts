import { Component, OnInit, ViewChild } from '@angular/core';
import { CountService } from '../services/count.service';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ChartOptions } from './chart';
import { forkJoin } from 'rxjs';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
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

  constructor(private service: CountService, private spinner: NgxSpinnerService, private http: HttpClient) { }
  public resolved: boolean = false;
  public loaddata: any;
  deskripsi: any = 'Loading..';

  dataPengecekan: any[] = [];
  arrayPengecekan: any[] = [];
  dataMaxCycle: any[] = [];
  maxCycle: number = 0;
  totalPengecekan: number = 0;
  pendingPlan: number = 0;
  activePlan: number = 0;
  expiredPlan: number = 0;
  prep: number = 0;
  prepFinish: number = 0;
  ibf: number = 0;
  ibfFinish: number = 0;
  label: number = 0;
  labelFinish: number = 0;
  caser: number = 0;
  caserFinish: number = 0;
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
      this.dataMaxCycle.push(data)

      console.log(this.dataMaxCycle[0]);
      for (let elem of this.dataMaxCycle[0]) {
        this.maxCycle = elem.id_max_cycle

      }
      console.log(this.maxCycle);



    });

    this.service.getCiltOci1().subscribe(data => {

      this.dataPengecekan.push(data);
      // console.log(this.dataPengecekan);

      this.arrayPengecekan.push(...this.dataPengecekan[0]);
      console.log(this.arrayPengecekan.length);
      this.totalPengecekan = this.arrayPengecekan.length

      for (let elem of this.arrayPengecekan) {

        if (elem.id_cycle == this.maxCycle && elem.result == null) {
          this.pendingPlan++
        } else if (elem.result != null) {
          this.activePlan++
        } else if (elem.id_cycle < this.maxCycle && elem.result == null) {
          this.expiredPlan++
        }
      }

      for (let elem of this.arrayPengecekan) {
        if (elem.sub_section == 'Preparation') {
          if (elem.result != null) {
            this.prepFinish++
          }
          this.prep++
        } else if (elem.sub_section == 'Injection' || elem.sub_section == 'Blow' || elem.sub_section == 'Filling') {
          if (elem.result != null) {
            this.ibfFinish++
          }
          this.ibf++
        } else if (elem.sub_section == 'Label') {
          if (elem.result != null) {
            this.labelFinish++
          }
          this.label++
        } else if (elem.sub_section == 'Caser') {
          if (elem.result != null) {
            this.caserFinish++
          }
          this.caser++
        }
      }
      if(this.prepFinish != 0 || this.prep != 0){
        this.prepFinish = (this.prepFinish / this.prep * 100)
      }else if(this.ibf != 0 || this.ibfFinish != 0){
        this.ibfFinish = (this.ibfFinish / this.ibf * 100)
      }else if(this.label != 0 || this.labelFinish != 0){
        this.labelFinish = (this.labelFinish / this.label * 100)
      }else if(this.caser != 0 || this.caserFinish != 0){
        this.caserFinish = (this.caserFinish / this.caser * 100)
      }


      // console.log(this.ibfFinish);
      
      // for(let i = 0; this.arrayPengecekan.length; i++){
      //   this.totalPengecekan++
      // }

      // Handle the data here
      this.chartOptions = {
        series: [
          {
            name: "basic",
            data: [this.prepFinish, this.ibfFinish, this.labelFinish, this.caserFinish]
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
    });


console.log(this.ibfFinish);





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



