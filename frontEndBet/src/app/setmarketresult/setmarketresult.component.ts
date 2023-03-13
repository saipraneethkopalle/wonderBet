import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-setmarketresult',
  templateUrl: './setmarketresult.component.html',
  styleUrls: ['./setmarketresult.component.css']
})
export class SetmarketresultComponent implements OnInit {
  matchesAllData:any;
  eMatchesAllData:any;
  beforeFilter :any;
  sport:any;
  matchData:any;
  isMatch:any=false;
  marketList:any=[];
  isType:any=false;
  typeList:any;

  currentSearch:any;

  betListData:any;
  error:any =true;
  currentDate:any=moment().format("YYYY-MM-DD hh:mm:ss");
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
    console.log("current date",this.currentDate);
    this.getMatchData();
  }

  getMatchData(){
    this.apiService.getAllMatches().subscribe((res:any)=>{
      res.data.map((rs:any)=>{
        rs.name=rs.eventName
      })
      this.matchesAllData = res.data;
      this.eMatchesAllData = res.data;
      this.beforeFilter = res.data;
      console.log(res);
    })
  }

  searchValue(value:any){
    if(value.target.value != null && value.target.value != ""){
      this.currentSearch = value.target.value;
      this.matchesAllData = this.matchesAllData.filter((val:any)=>{
        val.name = val.eventName  
        if(val.name.toLowerCase().includes(value.target.value)){
          return val
        }else{
          return val;
        }
      })
    }else{
      this.matchesAllData = this.eMatchesAllData;
    }
  }

  getMatchBySport(name:any){
    if(name.target.value){
      this.sport = name.target.value;
    }

    if (this.sport === "All") {
      // If user selects "All", show all matches
      this.getMatchData();
    } else {
      // If user selects a specific sport, filter the matches by sportId
      this.apiService.getAllMatches().subscribe((res:any)=>{
        this.matchesAllData = res.data.filter((data:any) => data.sportId == this.sport);
        this.matchData = res.data.filter((data:any) => data.sportId == this.sport);
      });
    }
  }

  matchDatalist(val:any){
    val= val.target.value;
    this.apiService.getAllMatches().subscribe((res:any)=>{
      this.matchesAllData = res.data.filter((data:any) => data.eventName == val);
      this.beforeFilter = this.matchesAllData;
      this.isMatch=true;
      this.marketList = this.matchesAllData[0]?.marketIds
    });
  }
}
