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
  beforeList:any;
  searchTerm:any='';
  ngOnInit(): void {
    this.getAllMatches();
  }
  getAllMatches(){
    this.apiService.getAllMatches().subscribe((res:any)=>{
      console.log(res);
      this.matchList = res.data.filter((element:any)=>{
        console.log("res.data",element)
        if(element.sportId=='4'){
          if(element.isActive==true && element.isResult==false){
            element.name=element.eventName
            return element;
          }
        }
      })
      console.log("match",this.matchList)
      this.beforeList = this.matchList
    })
  }
  searchValue(value:any) {
    console.log(value.target.value);
    if(value.target.value != null && value.target.value != ''){
    this.matchList = this.matchList.filter((val:any) =>{
      val.name=val.eventName
      if(val.name.toLowerCase().includes(value.target.value)){
        return val;
      }
     });
    }else{
      this.matchList = this.beforeList
    }
  }

}
