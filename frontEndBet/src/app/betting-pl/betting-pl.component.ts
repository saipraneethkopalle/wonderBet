import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betting-pl',
  templateUrl: './betting-pl.component.html',
  styleUrls: ['./betting-pl.component.css']
})
export class BettingPLComponent implements OnInit {
  currentTab:any=[0,1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit(): void {
    this.go(0); 
  }
  go(value:any){
    this.currentTab =value;
    console.log(this.currentTab);
  }
}
