import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';
@Component({
  selector: 'app-usermessage',
  templateUrl: './usermessage.component.html',
  styleUrls: ['./usermessage.component.css']
})
export class UsermessageComponent implements OnInit {
currentDate:any=moment().format("YYYY-MM-DD")

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
  }

}
