import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountService } from './../../services/count.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  constructor(private service : CountService, private actRoute: ActivatedRoute,) { }
  tables: any[] = [];
  id = this.actRoute.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getDB();
  }

  getDB() {
    this.service.getTableDoc(this.id).subscribe((result: any) => {
      this.tables = result.get;
      console.log(result.get);
    }, (err) => {
      console.log(err);

    });
  }

}
