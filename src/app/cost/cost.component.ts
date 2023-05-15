import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChartOptions } from './chart';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.css']
})
export class CostComponent implements OnInit {
  public chartOptions!: Partial<ChartOptions> | any;
  public resolved: boolean = false;

  const: object = {};
  const2: any = [];
  currentDate = new Date();
  Setting: number = 0;
  Replacement: number = 0;
  Improvement: number = 0;
  totalkategori: object = {};
  totalkategoriarr: any = [];
  public loaddata: any;
  donut: any = [];
  coba: any = [];
  pendingexecute: number = 0;
  finishexecute: number = 0;
  readyexecute: number = 0;
  //variable for cost maintenance
  cost: any;
  costarr: any = [];
  cmplanjan: any;
  cmplanfeb: any;
  cmplanmar: any;
  cmplanapr : any;
  cmplanmei : any;
  cmplanjun : any;
  cmplanjul : any;
  cmplanaug : any;
  cmplansep : any;
  cmplanokt : any;
  cmplannov : any;
  cmplandes : any;
  cmplanarr: any = [];
  cmactjan: any;
  cmactfeb: any;
  cmactmar: any;
  cmactapr: any;
  cmactmei: any;
  cmactjun: any;
  cmactjul: any;
  cmactaug: any;
  cmactsep: any;
  cmactokt: any;
  cmactnov: any;
  cmactdes: any;
  ovhplanjan: any;
  ovhplanfeb: any;
  ovhplanmar: any;
  ovhplanapr: any;
  ovhplanmei: any;
  ovhplanjun: any;
  ovhplanjul: any;
  ovhplanaug: any;
  ovhplansep: any;
  ovhplanokt: any;
  ovhplannov: any;
  ovhplandes: any;
  ovhactjan: any;
  ovhactfeb: any;
  ovhactmar: any;
  ovhactapr: any;
  ovhactmei: any;
  ovhactjun: any;
  ovhactjul: any;
  ovhactaug: any;
  ovhactsep: any;
  ovhactokt: any;
  ovhactnov: any;
  ovhactdes: any;
  pmplanjan: any;
  pmplanfeb: any;
  pmplanmar: any;
  pmplanapr: any;
  pmplanmei: any;
  pmplanjun: any;
  pmplanjul: any;
  pmplanaug: any;
  pmplansep: any;
  pmplanokt: any;
  pmplannov: any;
  pmplandes: any;
  pmactjan: any;
  pmactfeb: any;
  pmactmar: any;
  pmactapr: any;
  pmactmei: any;
  pmactjun: any;
  pmactjul: any;
  pmactaug: any;
  pmactsep: any;
  pmactokt: any;
  pmactnov: any;
  pmactdes: any;


  deskripsi: any = 'Loading..';
  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  async ngOnInit(): Promise<void> {
    this.costChart();
    window.scrollTo(0, 0);
    this.loaddata = new Promise(resolve => {
      this.service.getCountTotalFinding().subscribe(data => {
        this.totalkategori = data;
        Object.values(this.totalkategori).forEach(data => {
          // // console.log(data);
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          // // console.log(array);
          for (let i = 0; i < array.length; i++) {
            this.totalkategoriarr.splice(this.totalkategoriarr.lenght, 0, array[i]);
          }
          for (var i = 0; i < this.totalkategoriarr.length; i++) {
            if (this.totalkategoriarr[i].kategori === 'Preventive') {
              this.Setting += 1;
            }
            if (this.totalkategoriarr[i].kategori === 'Replacement') {
              this.Replacement += 1;
            }
            if (this.totalkategoriarr[i].kategori === 'Improvement') {
              this.Improvement += 1;
            }
          }
        })
      }
      );

      this.service.getCountTotalFinding().subscribe(data => {
        this.const = data;
        Object.values(this.const).forEach(data => {
          var array = Object.keys(data).map(function (key) {
            return data[key];
          });
          for (let i = 0; i < array.length; i++) {
            this.const2.splice(this.const2.lenght, 0, array[i]);
          }
          for (let elem of this.const2) {
            if (elem.status2 == 'CLOSED' || elem.status2 == 'TECO') {
              this.finishexecute += 1;

            }
            else if (elem.status2 == 'READY') {
              this.readyexecute += 1;
            } else if (elem.status1 == 'Done' || elem.status1 == 'None') {
              if (elem.status2 == 'RELEASED' || elem.status2 == 'CREATED') {
                this.pendingexecute += 1;
              }
            }
            else if (elem.status1 == 'Draft' || elem.status1 == 'Submit' || elem.status1 == 'Revise' || elem.status1 == 'Approved' || elem.status1 == 'Not Yet') {
              this.pendingexecute += 1;
            }
          }
          this.spinner.hide();
          this.resolved = true;

        })


      }
      );

      this.service.getCostOci1().subscribe(data => {
        this.cost = data;
        console.log(data);



        this.cost.forEach((element: any) => {
          if (element.category == "Corrective Maintenance" ) {
            if(element.actual == "Plan"){
              if(element.month == "Jan"){
                this.cmplanjan = element.budget;
              }else if(element.month == "Feb"){
                this.cmplanfeb = element.budget;
              }else if(element.month == "Mar"){
                this.cmplanmar = element.budget;
              }else if(element.month == "Apr"){
                this.cmplanapr = element.budget;
              }else if(element.month == "May"){
                this.cmplanmei = element.budget;
              }else if(element.month == "Jun"){
                this.cmplanjun = element.budget;
              }else if(element.month == "Jul"){
                this.cmplanjul = element.budget;
              }else if(element.month == "Agu"){
                this.cmplanaug = element.budget;
              }else if(element.month == "Sep"){
                this.cmplansep = element.budget;
              }else if(element.month == "Okt"){
                this.cmplanokt = element.budget;
              }else if(element.month == "Nov"){
                this.cmplannov = element.budget;
              }else if(element.month == "Des"){
                this.cmplandes = element.budget;
              }
            }else if(element.actual == "Actual"){
              if(element.month == "Jan"){
                this.cmactjan = element.budget;
              }else if(element.month == "Feb"){
                this.cmactfeb = element.budget;
              }else if(element.month == "Mar"){
                this.cmactmar = element.budget;
              }else if(element.month == "Apr"){
                this.cmactapr = element.budget;
              }else if(element.month == "Mei"){
                this.cmactmei = element.budget;
              }else if(element.month == "Jun"){
                this.cmactjun = element.budget;
              }else if(element.month == "Jul"){
                this.cmactjul = element.budget;
              }else if(element.month == "Agu"){
                this.cmactaug = element.budget;
              }else if(element.month == "Sep"){
                this.cmactsep = element.budget;
              }else if(element.month == "Okt"){
                this.cmactokt = element.budget;
              }else if(element.month == "Nov"){
                this.cmactnov = element.budget;
              }else if(element.month == "Des"){
                this.cmactdes = element.budget;
              }
            }
          } else if (element.category == "Overhaul") {
            if(element.actual == "Plan"){
              if(element.month == "Jan"){
                this.ovhplanjan = element.budget;
              }else if(element.month == "Feb"){
                this.ovhplanfeb = element.budget;
              }else if(element.month == "Mar"){
                this.ovhplanmar = element.budget;
              }else if(element.month == "Apr"){
                this.ovhplanapr = element.budget;
              }else if(element.month == "Mei"){
                this.ovhplanmei = element.budget;
              }else if(element.month == "Jun"){
                this.ovhplanjun = element.budget;
              }else if(element.month == "Jul"){
                this.ovhplanjul = element.budget;
              }else if(element.month == "Agu"){
                this.ovhplanaug = element.budget;
              }else if(element.month == "Sep"){
                this.ovhplansep = element.budget;
              }else if(element.month == "Okt"){
                this.ovhplanokt = element.budget;
              }else if(element.month == "Nov"){
                this.ovhplannov = element.budget;
              }else if(element.month == "Des"){
                this.ovhplandes = element.budget;
              }
            }else if(element.actual == "Actual"){
              if(element.month == "Jan"){
                this.ovhactjan = element.budget;
              }else if(element.month == "Feb"){
                this.ovhactfeb = element.budget;
              }else if(element.month == "Mar"){
                this.ovhactmar = element.budget;
              }else if(element.month == "Apr"){
                this.ovhactapr = element.budget;
              }else if(element.month == "Mei"){
                this.ovhactmei = element.budget;
              }else if(element.month == "Jun"){
                this.ovhactjun = element.budget;
              }else if(element.month == "Jul"){
                this.ovhactjul = element.budget;
              }else if(element.month == "Agu"){
                this.ovhactaug = element.budget;
              }else if(element.month == "Sep"){
                this.ovhactsep = element.budget;
              }else if(element.month == "Okt"){
                this.ovhactokt = element.budget;
              }else if(element.month == "Nov"){
                this.ovhactnov = element.budget;
              }else if(element.month == "Des"){
                this.ovhactdes = element.budget;
              }
            }
          } else if (element.category == "Preventive Maintenance") {
            if(element.actual == "Plan"){
              if(element.month == "Jan"){
                this.pmplanjan = element.budget;
              }else if(element.month == "Feb"){
                this.pmplanfeb = element.budget;
              }else if(element.month == "Mar"){
                this.pmplanmar = element.budget;
              }else if(element.month == "Apr"){
                this.pmplanapr = element.budget;
              }else if(element.month == "Mei"){
                this.pmplanmei = element.budget;
              }else if(element.month == "Jun"){
                this.pmplanjun = element.budget;
              }else if(element.month == "Jul"){
                this.pmplanjul = element.budget;
              }else if(element.month == "Agu"){
                this.pmplanaug = element.budget;
              }else if(element.month == "Sep"){
                this.pmplansep = element.budget;
              }else if(element.month == "Okt"){
                this.pmplanokt = element.budget;
              }else if(element.month == "Nov"){
                this.pmplannov = element.budget;
              }else if(element.month == "Des"){
                this.pmplandes = element.budget;
              }
            }else if(element.actual == "Actual"){
              if(element.month == "Jan"){
                this.pmactjan = element.budget;
              }else if(element.month == "Feb"){
                this.pmactfeb = element.budget;
              }else if(element.month == "Mar"){
                this.pmactmar = element.budget;
              }else if(element.month == "Apr"){
                this.pmactapr = element.budget;
              }else if(element.month == "Mei"){
                this.pmactmei = element.budget;
              }else if(element.month == "Jun"){
                this.pmactjun = element.budget;
              }else if(element.month == "Jul"){
                this.pmactjul = element.budget;
              }else if(element.month == "Agu"){
                this.pmactaug = element.budget;
              }else if(element.month == "Sep"){
                this.pmactsep = element.budget;
              }else if(element.month == "Okt"){
                this.pmactokt = element.budget;
              }else if(element.month == "Nov"){
                this.pmactnov = element.budget;
              }else if(element.month == "Des"){
                this.pmactdes = element.budget;
              }
            }
          }

        });

        // this.cmplanjan = this.cmplanjan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        // console.log(this.format(this.cmplanjan));

        this.costChart();
        console.log(this.pmplandes);
        console.log(this.ovhplandes);



      });

    });
    //// console.log("1");


    this.spinner.show();
    this.loaddata = await this.loaddata;
  }


  costChart() {
    this.chartOptions = {
      series: [
        {
          name: 'Actual',
          type: 'column',
          data: [this.cmactjan, this.cmactfeb, this.cmactmar, this.cmactapr, this.cmactmei, this.cmactjun, this.cmactjul, this.cmactaug, this.cmactsep, this.cmactokt, this.cmactnov, this.cmactdes],
        },
        {
          name: 'Plan',
          type: 'line',
          data: [this.cmplanjan, this.cmplanfeb, this.cmplanmar, this.cmplanapr, this.cmplanmei, this.cmplanjun, this.cmplanjul, this.cmplanaug, this.cmplansep, this.cmplanokt, this.cmplannov, this.cmplandes],
        },
      ],
      series2: [
        {
          name: 'Actual',
          type: 'column',
          data: [this.ovhactjan, this.ovhactfeb, this.ovhactmar, this.ovhactapr, this.ovhactmei, this.ovhactjun, this.ovhactjul, this.ovhactaug, this.ovhactsep, this.ovhactokt, this.ovhactnov, this.ovhactdes],
        },
        {
          name: 'Plan',
          type: 'line',
          data: [this.ovhplanjan, this.ovhplanfeb, this.ovhplanmar, this.ovhplanapr, this.ovhplanmei, this.ovhplanjun, this.ovhplanjul, this.ovhplanaug, this.ovhplansep, this.ovhplanokt, this.ovhplannov, this.ovhplandes],
        },
      ],
      series3: [
        {
          name: 'Actual',
          type: 'column',
          data: [this.pmactjan, this.pmactfeb, this.pmactmar, this.pmactapr, this.pmactmei, this.pmactjun, this.pmactjul, this.pmactaug, this.pmactsep, this.pmactokt, this.pmactnov, this.pmactdes],
        },
        {
          name: 'Plan',
          type: 'line',
          data: [this.pmplanjan, this.pmplanfeb, this.pmplanmar, this.pmplanapr, this.pmplanmei, this.pmplanjun, this.pmplanjul, this.pmplanaug, this.pmplansep, this.pmplanokt, this.pmplannov, this.pmplandes],
        },
      ],
      chart: {
        height: 600,
        type: 'line',
        zoom: {
          enabled: true,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 7,
          endingShape: 'rounded',

        },
      },
      stroke: {
        width: [0, 3],
      },
      legend: {
        position: 'top',
      },
      // stroke2: {
      //   width: [0, 0],
      // },
      // title: {
      //   // text: 'Traffic Sources',
      // },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
        },
            formatter: (x:any) => {
                return 'Rp. ' + this.separateComma(x);
            },
      dropShadow: { enabled: true }


        // enabledOnSeries: [1],
      },
      colors: [
        '#3ac7e0',
        '#acdb12',
        // '#00ABB3',
        // '#00ABB3',
        // '#00ABB3',
        // '#607EAA',
        // '#607EAA',
        // '#607EAA',
      ],
      labels: ['Januari', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember' ],
      labels2: ['', ''],
      xaxis: {
        // labels:{
        //   formatter: (value:number) => {
        //     return this.numberWithCommas(value);
        //   },
        // },
      },
      yaxis: [
        {
          title: {
            text: 'Correctice Maintenance Cost',
            style: {
              // color: undefined,
              fontSize: '12px',
              fontFamily: 'Manrope',
              fontWeight: 700,
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          labels:{
            formatter: (value:number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      yaxis2: [
        {
          title: {
            text: 'Overhaul Cost',
            style: {
              // color: undefined,
              fontSize: '12px',
              fontFamily: 'Manrope',
              fontWeight: 700,
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          labels:{
            formatter: (value:number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      yaxis3: [
        {
          title: {
            text: 'Preventive Maintenance Cost',
            style: {
              // color: undefined,
              fontSize: '12px',
              fontFamily: 'Manrope',
              fontWeight: 700,
              cssClass: 'apexcharts-yaxis-title',
            },
          },
          labels:{
            formatter: (value:number) => {
              return 'Rp. ' + this.numberWithCommas(value);
            },
          },
        },

      ],
      // yaxis2: [
      //   {
      //     title: {
      //       text: 'Level (inchH₂O)',
      //       style: {
      //         // color: undefined,
      //         fontSize: '12px',
      //         fontFamily: 'Manrope',
      //         fontWeight: 700,
      //         cssClass: 'apexcharts-yaxis-title',
      //       },
      //     },
      //   },
      // ],
    };
  };

  numberWithCommas(x:any) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
separateComma(val: any) {
  // remove sign if negative
  var sign = 1;
  if (val < 0) {
  sign = -1;
  val = -val;
  }
  // trim the number decimal point if it exists
  let num = val.toString().includes('.')
  ? val.toString().split('.')[0]
  : val.toString();
  let len = num.toString().length;
  let result = '';
  let count = 1;

  for (let i = len - 1; i >= 0; i--) {
  result = num.toString()[i] + result;
  if (count % 3 === 0 && count !== 0 && i !== 0) {
  result = ',' + result;
  }
  count++;
  }

  // add number after decimal point
  if (val.toString().includes('.')) {
  result = result + '.' + val.toString().split('.')[1];
  }
  // return result with - sign if negative
  return sign < 0 ? '-' + result : result;
  }

};

