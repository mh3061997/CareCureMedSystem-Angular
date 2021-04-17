import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  apiPath="http://localhost:80/blog/wp-json/wp/v2/posts/"
  constructor(private http:HttpClient) {
    
   }

   getAllPosts(){
     return this.http.get<any[]>(this.apiPath);
   }

   getPost(id:string){
     return this.http.get<any>(this.apiPath+id);
   }
}
