import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pages:any=[];
  pageCount:any;
  currentPage:any;
  showNext:any;
  showPrev:any;
  limit:any=10;
  start:any=1;
  end:any=10;
  range:any=[0,9];
  pageList:any;
  constructor() { }

  ngOnInit(): void {
    this.pageCount=localStorage.getItem('pageCount');
    this.pageList = localStorage.getItem('pagelist')||[];
    this.pageCount = this.pageCount!=0?this.pageCount:10;
    this.pageCount =this.pageCount / this.limit;
    this.pages=Array.from({length: this.pageCount}, (_, i) => i + 1)
    if(this.pages > 1){
      this.showNext=true
      this.showPrev=true

    }else{
      this.showNext=false
      this.showPrev=false
    }

  }
  setCurrentPage(pageNo:any){
    this.currentPage=pageNo
    if(this.pages > 1){
      this.showNext=true
      this.showPrev=true

    }else{
      this.showNext=false
      this.showPrev=false
    }
  }
  setCurrent(page:any){
    this.currentPage=page;
    console.log(this.currentPage,this.range);
    let p=this.pageList.slice(0,9);
    console.log("pl",p);
  }
  prev(){
    this.start =this.currentPage > 2 ? this.currentPage - 1 :this.currentPage
    this.end=this.start + 10
    this.range=[this.start,this.end]
    this.pageList=this.pageList.slice(this.range[0],this.range[1]);
  }
  next(){
    this.start =this.currentPage > 2 ? this.currentPage + 1 :this.currentPage
    this.end=this.start + 10
    this.pageList=this.pageList.slice(this.range[0],this.range[1]);
  }

}
