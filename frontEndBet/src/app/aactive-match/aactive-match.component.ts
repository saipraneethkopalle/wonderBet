import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-aactive-match',
  templateUrl: './aactive-match.component.html',
  styleUrls: ['./aactive-match.component.css']
})
export class AactiveMatchComponent implements OnInit {

  constructor(private apiService:ApiServicesService) { }
  matchList:any;
  ngOnInit(): void {
    this.getMatches();
  }
  getMatches(){
    this.apiService.getMatches().subscribe((res:any)=>{
      this.matchList = res.data.filter((element:any)=>{
        console.log("res.data",res.data)
        if(element.sportId==='4'){
          console.log("element",element);
          if(element.isActive===true && element.isResult===false){
            console.log(element);
            return res.data;
            
          }
          
        }
      })
      // console.log("this.matchList",this.matchList)
    })
  }

}
