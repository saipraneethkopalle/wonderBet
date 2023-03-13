import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-home-betting-history',
  templateUrl: './home-betting-history.component.html',
  styleUrls: ['./home-betting-history.component.css']
})
export class HomeBettingHistoryComponent implements OnInit {
  currentTab:any=[0,1,2,3,4,5,6,7];
  currentUserName:any;
  shortCut:any;
  selectedUser:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.go(0);
    document.body.style.backgroundColor="#f0ece1";
    this.currentUserName =this.apiService.getUserName()
    this.shortCut = localStorage.getItem('shortCut');
    this.selectedUser = localStorage.getItem('selectedUser');
  }
  go(value:any){
    this.currentTab =value;
    console.log(this.currentTab);
  }


}
