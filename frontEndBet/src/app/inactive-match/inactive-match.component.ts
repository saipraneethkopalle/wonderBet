import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-inactive-match',
  templateUrl: './inactive-match.component.html',
  styleUrls: ['./inactive-match.component.css']
})
export class InactiveMatchComponent implements OnInit {

  constructor(private apiService:ApiServicesService) { }

  matchList:any;
  ngOnInit(): void {
    this.getMatches();
  }
  getMatches(){
    this.apiService.getMatches().subscribe((res:any)=>{
      this.matchList = res.data.filter((element:any)=>{
        // console.log("res.data",res.data)
        if(element.sportId==='4'){
          console.log("element",element);
          if(element.isActive===true && element.isResult===true){
            console.log("DADA",element);
            return res.data;
            
          }
          
        }
      })
    })
  }

}
