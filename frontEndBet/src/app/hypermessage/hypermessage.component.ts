import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-hypermessage',
  templateUrl: './hypermessage.component.html',
  styleUrls: ['./hypermessage.component.css']
})
export class HypermessageComponent implements OnInit {
currentDate:any=moment().format("YYYY-MM-DD")
  constructor() { }

  ngOnInit(): void {
  }

}
