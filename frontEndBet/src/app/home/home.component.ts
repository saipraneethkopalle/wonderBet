import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountDetails:any=[{account:"main",accountType:"SUA",creditRef:"60,00,000",balance:"60,000,000",exposure:"0.00",availBal:"6,00,00,000",playerBal:"2,00,000",refPL:"4,34,00,345",status:"Active"}];
  constructor() { }

  ngOnInit(): void {
  }


}
