import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {
  currentUserName:any;
  shortCut:any;
  selectedUser:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.currentUserName =this.apiService.getUserName()
    this.shortCut = localStorage.getItem('shortCut');
    this.selectedUser = localStorage.getItem('selectedUser');
  }

}
