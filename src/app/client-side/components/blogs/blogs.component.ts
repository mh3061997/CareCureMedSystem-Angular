import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  htmlString="";

  constructor(HttpClient:HttpClient) { 

    HttpClient.get<any>("http://localhost/blog/wp-json/wp/v2/posts/25").subscribe(post => {
      this.htmlString = post.content.rendered;
    })
  }

  ngOnInit(): void {
  }

}
