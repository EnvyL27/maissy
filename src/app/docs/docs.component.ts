import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  constructor(private service : CountService) { }
  section: any[] = [];

  ngOnInit(): void {
    this.getSection();
  }

  getSection() {
    this.service.getSectionDoc().subscribe((result: any) => {
      this.section = result.get;
      console.log(result.get);
    }, (err) => {
      console.log(err);

    });
  }

}
