import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activitylog',
  templateUrl: './activitylog.component.html',
  styleUrls: ['./activitylog.component.css']
})
export class ActivitylogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.backgroundColor="#f0ece1";
  }

}
