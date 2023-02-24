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
    this.getMatches()
  }
  getMatches() {
    this.apiService.getAllMatches().subscribe((res:any)=>{
      this.matchList = res.data;
    })
  }
  
  

}
