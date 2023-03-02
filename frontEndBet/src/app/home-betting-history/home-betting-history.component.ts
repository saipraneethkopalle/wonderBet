import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-betting-history',
  templateUrl: './home-betting-history.component.html',
  styleUrls: ['./home-betting-history.component.css']
})
export class HomeBettingHistoryComponent implements OnInit {
  currentTab:any=[0,1,2,3,4,5,6,7];
  constructor() { }

  ngOnInit(): void {
    this.go(0); 
  }
  go(value:any){
    this.currentTab =value;
    console.log(this.currentTab);
  }


}
