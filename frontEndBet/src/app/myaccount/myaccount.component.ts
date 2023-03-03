import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
     document.body.style.backgroundColor="#f0ece1";
  }
clicked() {
  console.log('cliecket')
}
}
