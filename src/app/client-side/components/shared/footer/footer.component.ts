import { Component, OnInit } from '@angular/core';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faTiktok=faTiktok;
  constructor() { }

  ngOnInit(): void {
  }

}
