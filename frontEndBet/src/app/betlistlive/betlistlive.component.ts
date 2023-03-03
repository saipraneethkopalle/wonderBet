import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-betlistlive',
  templateUrl: './betlistlive.component.html',
  styleUrls: ['./betlistlive.component.css'],
})
export class BetlistliveComponent implements OnInit {
  selectedOption: any;
  betlistLive:any
  user:any
  constructor(private api: ApiServicesService) {}
  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
    this.onclick()
  }
  onRadioChange(type: any) {
    console.log('fjkdf', type.value);
    this.selectedOption = type.value;
  }
onclick(){
  this.api.getAllMatches().subscribe((res:any)=>{
    console.log(res.data)
  this.user=res.data
  })
}
}
