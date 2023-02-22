import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-sport-wise-profitloss',
  templateUrl: './sport-wise-profitloss.component.html',
  styleUrls: ['./sport-wise-profitloss.component.css']
})
export class SportWiseProfitlossComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");
  constructor() { }

  ngOnInit(): void {
  }

}
