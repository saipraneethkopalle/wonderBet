import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sportsetting',
  templateUrl: './sportsetting.component.html',
  styleUrls: ['./sportsetting.component.css']
})
export class SportsettingComponent implements OnInit {
  compo:any[]=["Cricket","Tennis","Soccer"]
  currentcompo:any
  constructor() { }

  ngOnInit(): void {
    this.findcompo(0)
  }
  findcompo(selectedcompo:any){
    this.currentcompo=selectedcompo
  }

}
