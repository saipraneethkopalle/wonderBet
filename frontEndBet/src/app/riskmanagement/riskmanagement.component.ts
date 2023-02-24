import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riskmanagement',
  templateUrl: './riskmanagement.component.html',
  styleUrls: ['./riskmanagement.component.css']
})
export class RiskmanagementComponent implements OnInit {
  currentTab:any=0;
  constructor() { }

  ngOnInit(): void {
  }
  listPlayer(num:any){
    this.currentTab = num;
  }

}
