import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-betlist',
  templateUrl: './betlist.component.html',
  styleUrls: ['./betlist.component.css']
})
export class BetlistComponent implements OnInit {
  betListData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
