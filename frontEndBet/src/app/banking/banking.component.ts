import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent implements OnInit {
  bankList:any;
  beforeList:any;
  searchTerm:any='';
  constructor() { }

  ngOnInit(): void {
      this.getBankList();
  }
  getBankList(){
    this.bankList = [{uid:"main",name:'',balance:604349342,available:354345462,exposure:0.00,depositWithDraw:0,creditRef:6000000,refPL:45335325,remark:0}]
    this.beforeList = [{uid:"main",name:'',balance:604349342,available:354345462,exposure:0.00,depositWithDraw:0,creditRef:6000000,refPL:45335325,remark:0}]
  }
  search(term:any){
    this.searchTerm= term.target.value
    if(this.searchTerm != null && this.searchTerm != ''){
      this.bankList = this.bankList.filter((bl:any)=>{
          bl.name=bl.uid
          if(bl.name.toLowerCase().includes(term.target.value)){
            return bl;
          }
      })
    }else{
      this.bankList = this.beforeList;
    }
  }

}
