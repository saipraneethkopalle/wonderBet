import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-match-profitloss',
  templateUrl: './match-profitloss.component.html',
  styleUrls: ['./match-profitloss.component.css']
})
export class MatchProfitlossComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");
  constructor() { }

  ngOnInit(): void {
  }

}
