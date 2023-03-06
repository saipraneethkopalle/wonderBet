import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-setmarketresult',
  templateUrl: './setmarketresult.component.html',
  styleUrls: ['./setmarketresult.component.css']
})
export class SetmarketresultComponent implements OnInit {
  betListData:any;
  error:any =true;
  currentDate:any=moment().format("YYYY-MM-DD hh:mm:ss");
  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
    console.log("current date",this.currentDate)
  }
  // get(v:any){
  //   console.log("clicked",v.target.value)
  // }

}
