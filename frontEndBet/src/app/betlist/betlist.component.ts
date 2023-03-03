import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-betlist',
  templateUrl: './betlist.component.html',
  styleUrls: ['./betlist.component.css']
})
export class BetlistComponent implements OnInit {
  betListData:any=[];
  error:any =true;
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");
  range:any;
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('pageCount',this.betListData.length)
    localStorage.setItem('pagelist',this.betListData);
  }

}
