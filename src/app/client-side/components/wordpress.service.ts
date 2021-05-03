import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathService } from 'src/app/services/path.service';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {


  constructor(private http:HttpClient,private servPath:PathService) {
    
   }

   getAllPosts(){
     return this.http.get<any[]>(this.servPath.getPathBlogJson());
   }

   getPost(id:string){
     return this.http.get<any>(this.servPath.getPathBlogJson()+id);
   }
}
