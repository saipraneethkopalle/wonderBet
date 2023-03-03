import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-casino-profit-by-date',
  templateUrl: './casino-profit-by-date.component.html',
  styleUrls: ['./casino-profit-by-date.component.css']
})
export class CasinoProfitByDateComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
  }

}
