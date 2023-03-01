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
  beforeList:any;
  searchTerm:any='';

  ngOnInit(): void {
    this.getAllMatches();
  }
  getAllMatches(){
    this.apiService.getAllMatches().subscribe((res:any)=>{
      this.matchList = res.data.filter((element:any)=>{
        console.log("res.data",res.data)
        if(element.sportId==='4'){
          console.log("element",element);
          if(element.isActive===true && element.isResult===false){
            console.log("DADA",element);
            element.name=element.eventName
            return element;
            
          }
          
        }
      })
      this.beforeList = this.matchList

    })
  }
  searchValue(value:any) {
    console.log(value.target.value);
    if(value.target.value != null && value.target.value != ''){
    this.matchList = this.matchList.filter((val:any) =>{
      val.name=val.eventName
      if(val.eventName.toLowerCase().includes(value.target.value)){
        return val
      }
    });
    }else{
      this.matchList = this.beforeList
    }
  }

}
