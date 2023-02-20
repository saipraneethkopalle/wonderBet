import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addmatch',
  templateUrl: './addmatch.component.html',
  styleUrls: ['./addmatch.component.css']
})
export class AddmatchComponent implements OnInit {
  cricketList:any;
  soccerList:any;
  tennisList:any;
  matchesExist:any;
  matchList: any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.newMatches();
  }
  newMatches(){
    this.apiService.getMatches().subscribe((res:any)=>{
      this.matchList = res.data;
      this.cricketList = this.matchList.filter((sp:any)=>{if(sp.sportId=='4') return sp;})
      this.tennisList = this.matchList.filter((sp:any)=>{if(sp.sportId=='1') return sp;})
      this.soccerList = this.matchList.filter((sp:any)=>{if(sp.sportId=='2') return sp;})
      this.getAllMatches();
    })

  }
  addMatch(data:any){
    this.apiService.addMatches(data).subscribe((res:any)=>{
      this.matchList = this.matchList.filter((ml:any)=>{
        if(ml.eventId != data.eventId){
          return ml;
        }
      })
      this.cricketList = this.matchList.filter((sp:any)=>{if(sp.sportId=='4') return sp;})
      this.tennisList = this.matchList.filter((sp:any)=>{if(sp.sportId=='1') return sp;})
      this.soccerList = this.matchList.filter((sp:any)=>{if(sp.sportId=='2') return sp;})
      Swal.fire({
        title:'Success!',
        text:`${data.eventName} Match Added Successfully`,
        timer:1500

      })
    })
  }
  getAllMatches(){
    this.apiService.getAllMatches().subscribe((res:any)=>{
      this.matchesExist = res.data
      this.matchList = this.matchList.filter((fs:any)=>{
        if(this.matchesExist.filter((mE:any)=>{if(mE.eventId == fs.eventId) return mE;}).length == 0){
          return fs;
        }
      })
      this.cricketList = this.matchList.filter((sp:any)=>{if(sp.sportId=='4') return sp;})
      this.tennisList = this.matchList.filter((sp:any)=>{if(sp.sportId=='1') return sp;})
      this.soccerList = this.matchList.filter((sp:any)=>{if(sp.sportId=='2') return sp;})
    })
  }

}
