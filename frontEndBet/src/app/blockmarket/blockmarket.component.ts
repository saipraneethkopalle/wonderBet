import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blockmarket',
  templateUrl: './blockmarket.component.html',
  styleUrls: ['./blockmarket.component.css']
})
export class BlockmarketComponent implements OnInit {
  sportsData:any;
  constructor() { }

  ngOnInit(): void {
    this.sportsData =[{betfairId:1,Name:"Soccer",status:"Soccer is ON"},{betfairId:2,Name:"Tennis",status:"Tennis is ON"},{betfairId:4,Name:"Cricket",status:"Cricket is ON"}]
  }


}
