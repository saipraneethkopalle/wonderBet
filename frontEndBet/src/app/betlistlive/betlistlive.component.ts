import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-betlistlive',
  templateUrl: './betlistlive.component.html',
  styleUrls: ['./betlistlive.component.css'],
})
export class BetlistliveComponent implements OnInit {
  selectedOption: any;
  constructor(private api: ApiServicesService) {}
  ngOnInit(): void {}
  onRadioChange(type: any) {
    console.log('fjkdf', type.value);
    this.selectedOption = type.value;
  }
}
