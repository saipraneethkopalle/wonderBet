import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rejected-bets',
  templateUrl: './rejected-bets.component.html',
  styleUrls: ['./rejected-bets.component.css']
})
export class RejectedBetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
  }

}
