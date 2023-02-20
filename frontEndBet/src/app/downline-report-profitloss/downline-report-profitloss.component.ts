import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-downline-report-profitloss',
  templateUrl: './downline-report-profitloss.component.html',
  styleUrls: ['./downline-report-profitloss.component.css']
})
export class DownlineReportProfitlossComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
