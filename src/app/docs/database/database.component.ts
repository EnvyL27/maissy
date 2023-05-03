import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountService } from './../../services/count.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor(private service : CountService, private actRoute: ActivatedRoute,) { }
  databases: any[] = [];
  id = this.actRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getDB();
  }

  getDB() {
    this.service.getDbDoc(this.id).subscribe((result: any) => {
      this.databases = result.get;
      console.log(result.get);
    }, (err) => {
      console.log(err);

    });
  }

}
