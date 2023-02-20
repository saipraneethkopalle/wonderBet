import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-sportsetting',
  templateUrl: './sportsetting.component.html',
  styleUrls: ['./sportsetting.component.css']
})
export class SportsettingComponent implements OnInit {
  compo:any[]=["Cricket","Tennis","Soccer"]
  currentcompo:any
  matchList:any;
  cricketList:any;
  tennisList:any;
  soccerList:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.findcompo(0)
    this.getAllMatches();
  }
  findcompo(selectedcompo:any){
    this.currentcompo=selectedcompo
  }
  getAllMatches(){
    this.apiService.getAllMatches().subscribe((res:any)=>{
      this.matchList = res.data
      this.cricketList = this.matchList.filter((sp:any)=>{if(sp.sportId=='4') return sp;})
      this.tennisList = this.matchList.filter((sp:any)=>{if(sp.sportId=='1') return sp;})
      this.soccerList = this.matchList.filter((sp:any)=>{if(sp.sportId=='2') return sp;})
    })
  }
}
