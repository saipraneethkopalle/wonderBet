import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  accountDetails:any=[{account:"main",creditRef:"60,00,000",exposure:"0.00",availBal:"6,00,00,000",playerBal:"2,00,000",refBal:"434345",status:"Active"}];
  constructor() { }

  ngOnInit(): void {
  }


}
