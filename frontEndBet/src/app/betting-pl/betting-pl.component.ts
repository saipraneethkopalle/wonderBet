import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-betting-pl',
  templateUrl: './betting-pl.component.html',
  styleUrls: ['./betting-pl.component.css']
})
export class BettingPLComponent implements OnInit {
  currentTab:any=[0,1,2,3,4,5,6,7,8];
  currentUserName:any;
  shortCut:any;
  selectedUser:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.go(0);
    this.currentUserName =this.apiService.getUserName()
    this.shortCut = localStorage.getItem('shortCut');
    this.selectedUser = localStorage.getItem('selectedUser');
    document.body.style.backgroundColor="#f0ece1";
  }
  go(value:any){
    this.currentTab =value;
    console.log(this.currentTab);
  }
}
