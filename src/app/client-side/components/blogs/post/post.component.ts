import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../../wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any;

  constructor(private blogService:WordpressService) {
    
    blogService.getPost("25").subscribe(post=>{
      this.post = post
    });
  
   }

  ngOnInit(): void {
  }

}
