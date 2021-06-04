import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  postsHtmlArr:any[];
  showSpinner = false;

  constructor(private blogService:WordpressService) { 

    this.showSpinner=true;
    blogService.getAllPosts().subscribe(posts => {
    
      
      this.postsHtmlArr=posts.map(post =>{
        
        post.thumbnail=this.extractImgTag(post.content.rendered);
        return post;       
      });
      this.showSpinner=false;
    });

 
    
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
