import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  postsHtmlArr:any[];

  constructor(private blogService:WordpressService) { 

    blogService.getAllPosts().subscribe(posts => {
      console.log("posts",posts);
      
      this.postsHtmlArr=posts.map(post =>{
        
        post.thumbnail=this.extractImgTag(post.content.rendered);
        return post;       
      });
    });

    console.log(this.postsHtmlArr);
    
  }

  extractImgTag(postHtml:any){
     //console.log("html"+postHtml);
    
    // console.log(postHtml.match(/<img [^>]*src="[^"]*"[^>]*>/gm));
    let imgTag = postHtml.match(/src="?([^"\s]+)(jp?g|png|gif)"/g);

    if(imgTag && imgTag[0]){
      return imgTag[0].split('=')[1].split('"')[1];
    }else{
      return null;
    }
  }

  ngOnInit(): void {
  }

}
