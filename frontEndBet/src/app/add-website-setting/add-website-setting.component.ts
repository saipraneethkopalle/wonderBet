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
  site:any=null;
  searchTerm:any='';
  error:any;

  ngOnInit(): void {
    this.getAllWebsite();
    document.body.style.backgroundColor="#f0ece1";
  }
  getAllWebsite(){
    this.apiService.getAllWebsite().subscribe((res:any)=>{
      this.websites = res.data

      this.beforeList = this.websites

    })


  }

  addWebsite(value:any) {
    console.log(value.target.value);
    this.site=value.target.value

  }
  addSite(){
    console.log("site",this.site)
    if(this.site != null && this.site != ''){
    let addwesitName={"websiteName":this.site}
    this.apiService.createWebsite(addwesitName).subscribe((res:any)=>{
      console.log("success");
      this.getAllWebsite()
      this.error='';
      this.site ='';
    })
  }else{
    this.error="Enter website name"
  }
  }

}
