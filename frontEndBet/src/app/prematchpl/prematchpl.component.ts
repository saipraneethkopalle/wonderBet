import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-prematchpl',
  templateUrl: './prematchpl.component.html',
  styleUrls: ['./prematchpl.component.css']
})
export class PrematchplComponent implements OnInit {

  constructor(private apiService:ApiServicesService) { }
  matchList:any;
  matchName:any
  ngOnInit(): void {
    this.getMatches('cricket')
  }
  getMatches(sport:any) {
    this.apiService.getAllMatches().subscribe((res:any)=>{
      
      if(sport=='cricket'){
        this.matchList = res.data.filter((el:any)=>{
          if(el.sportId=='4') {
            return el;
          }

        })
      } else if(sport=='soccer'){
        this.matchList = res.data.filter((el:any)=>{
          if(el.sportId=='1') {
            return el;
          }

        })
      } else{
        this.matchList = res.data.filter((el:any)=>{
          if(el.sportId=='2') {
            return el;
          }

        })
      }
     
    })
  }
  
  

}
