import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-spinner',
  templateUrl: './local-spinner.component.html',
  styleUrls: ['./local-spinner.component.css']
})
export class LocalSpinnerComponent implements OnInit {

  @Input()
  showSpinner:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
