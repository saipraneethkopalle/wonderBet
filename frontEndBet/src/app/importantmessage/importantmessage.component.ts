import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-importantmessage',
  templateUrl: './importantmessage.component.html',
  styleUrls: ['./importantmessage.component.css']
})
export class ImportantmessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
  }

}
