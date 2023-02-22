import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-market-profitloss',
  templateUrl: './market-profitloss.component.html',
  styleUrls: ['./market-profitloss.component.css']
})
export class MarketProfitlossComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");
  constructor() { }

  ngOnInit(): void {
  }

}
