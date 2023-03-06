import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-asetfancyresult',
  templateUrl: './asetfancyresult.component.html',
  styleUrls: ['./asetfancyresult.component.css']
})
export class AsetfancyresultComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD hh:mm:ss");
  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
  }

  
}
