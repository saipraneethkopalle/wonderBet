import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-livemarketbet',
  templateUrl: './livemarketbet.component.html',
  styleUrls: ['./livemarketbet.component.css']
})
export class LivemarketbetComponent implements OnInit {
  matchesAllData:any;
  sport:any;
  match:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
    this.getMatchData();
  }


  getMatchData(){
    this.apiService.getAllMatches().subscribe((res:any)=>{
      this.matchesAllData = res.data;
      console.log(res);
    })
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
      });
    }
  }
  
  getMatch(val:any){
    if(val.target.value){
      this.match = val.target.value;
    }

    if (this.match === "mAll"){
      console.log(this.matchesAllData);
      // If user selects "All", show all matches
      this.getMatchData();
    } else {
      // If user selects a specific sport, filter the matches by sportId
      this.apiService.getAllMatches().subscribe((res:any)=>{
        this.matchesAllData = res.data.filter((data:any) => data.eventName == this.match);
      });
    }
  }
}

