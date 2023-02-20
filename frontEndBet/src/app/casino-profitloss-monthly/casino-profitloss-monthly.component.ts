import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-casino-profitloss-monthly',
  templateUrl: './casino-profitloss-monthly.component.html',
  styleUrls: ['./casino-profitloss-monthly.component.css']
})
export class CasinoProfitlossMonthlyComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");

  constructor() { }

  ngOnInit(): void {
  }

}
