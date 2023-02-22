import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-downline-profitloss',
  templateUrl: './downline-profitloss.component.html',
  styleUrls: ['./downline-profitloss.component.css']
})
export class DownlineProfitlossComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");

  constructor() { }

  ngOnInit(): void {
  }

}
