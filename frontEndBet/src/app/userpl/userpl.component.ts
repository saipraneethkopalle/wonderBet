import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-userpl',
  templateUrl: './userpl.component.html',
  styleUrls: ['./userpl.component.css']
})
export class UserplComponent implements OnInit {
  currentDate:any=moment().format("YYYY-MM-DD");
  currentTime:any=moment().format("hh:mm");
  constructor() { }

  ngOnInit(): void {
  }

}
