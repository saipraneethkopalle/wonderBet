import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivitylogComponent implements OnInit {
  currentUserName:any;
  constructor(private apiService:ApiServicesService) { }

  ngOnInit(): void {
    this.currentUserName =this.apiService.getUserName();
    document.body.style.backgroundColor="#f0ece1";
  }

}
