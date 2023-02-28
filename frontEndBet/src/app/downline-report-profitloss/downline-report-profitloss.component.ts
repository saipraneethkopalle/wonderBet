import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-downline-report-profitloss',
  templateUrl: './downline-report-profitloss.component.html',
  styleUrls: ['./downline-report-profitloss.component.css']
})
export class DownlineReportProfitlossComponent implements OnInit {
  currentDate: any = moment().format("YYYY-MM-DD");
  endDate: any = moment().format("YYYY-MM-DD");

  currentTime: any = moment().format("hh:mm");



  constructor(private apiService: ApiServicesService) { }

  matchDate: any;

  ngOnInit(): void {

  }



  searchDate() {
    const arr = [{ name: "subhashbi", lastname: "maurya", date: "2023-02-26" }, { name: "subhashbi", lastname: "maurya", date: "2023-02-27" }, { name: "subhashbi", lastname: "maurya", date: "2023-02-28" }, { name: "shivani", lastname: "yadav", date: "2023-02-25" }]

    // var startDate = this.currentDate;
    // var endDate = this.endDate;
    // console.log(startDate,"ggg",endDate);
    
  
    this.matchDate = arr.filter((a:any) => {
      
      if(a.date >= this.currentDate && a.date <= this.endDate){
        console.log("date",a);
        return a;
        
      }
    });
    console.log("this.matchDate",this.matchDate)
    

   

  }

}
