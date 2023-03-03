import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  pages:any=[1,2,3,4];
  currentPage:any;
  constructor() { }

  ngOnInit(): void {
  }
  setCurrentPage(pageNo:any){
    this.currentPage=pageNo
  }
}
