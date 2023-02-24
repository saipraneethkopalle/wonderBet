import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../api-services.service';

@Component({
  selector: 'app-add-website-setting',
  templateUrl: './add-website-setting.component.html',
  styleUrls: ['./add-website-setting.component.css']
})
export class AddWebsiteSettingComponent implements OnInit {

  constructor(private apiService:ApiServicesService) { }
  websites:any
  beforeList:any
  searchTerm:any='';

  ngOnInit(): void {
    this.getAllWebsite();
  }
  getAllWebsite(){
    this.apiService.getAllWebsite().subscribe((res:any)=>{
      this.websites = res.data

      this.beforeList = this.websites

    })


  }

  searchValue(value:any) {
    console.log(value.target.value);
    if(value.target.value != null && value.target.value != ''){
    this.websites = this.websites.filter((val:any) =>
      val.eventName.toLowerCase().includes(value.target.value)
    );
    }else{
      this.websites = this.beforeList
    }
  }

}
