import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../../wordpress.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post:any;
  postId:string;

  constructor(private blogService:WordpressService,private currentRoute:ActivatedRoute) {
    
    this.currentRoute.params.subscribe(params =>{
      this.postId=params['id'];
    })
    
    blogService.getPost(this.postId).subscribe(post=>{
      this.post = post
    });
  
   }

  ngOnInit(): void {
  }

}
