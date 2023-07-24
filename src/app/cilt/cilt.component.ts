import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cilt',
  templateUrl: './cilt.component.html',
  styleUrls: ['./cilt.component.css']
})
export class CiltComponent implements OnInit {
  
  constructor(private spinner: NgxSpinnerService) { }
  public resolved: boolean = false;
  public loaddata: any;
  deskripsi: any = 'Loading..';
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
  }

}
