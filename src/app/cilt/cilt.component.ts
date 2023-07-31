import { Component, OnInit } from '@angular/core';
import { CountService } from '../services/count.service';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
// import { ChartOptions } from './chart';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cilt',
  templateUrl: './cilt.component.html',
  styleUrls: ['./cilt.component.css']
})
export class CiltComponent implements OnInit {

  constructor(private service: CountService, private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  public loaddata: any;
  deskripsi: any = 'Loading..';

  dataPengecekan : object = [];
  dataMaxCycle : object = [];
  maxCycle : any = [];
  totalPengecekan : any = [];
  activePlan : any = [];
  ExpiredPlan : any = [];
  curCycle : any = [];

  async ngOnInit(): Promise<void> {
    window.scrollTo(0, 0);
    this.spinner.show();
    this.loaddata = await this.loaddata;
    var count = 0;
    this.loaddata = new Promise(resolve => {
      var a = setInterval(()=>{
        count ++;
        this.spinner.hide();
        this.resolved = true;
        if(count = 1){
          clearInterval(a);
        }
      },100);
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

        for(let i = 0; i < array.length; i++){
          this.totalPengecekan.splice(this.totalPengecekan.length, 0, array[i]);
        }
        for(let i = 0; i < this.totalPengecekan.length; i ++){
          console.log(i);


        }
        console.log(this.totalPengecekan);

      })
    });

  }


}
