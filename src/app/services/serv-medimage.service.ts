import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResMedImage } from 'src/app/interfaces/res-med-image'
import { Observable } from 'rxjs';
import { PathService } from './path.service';

@Injectable({
  providedIn: 'root'
})
export class ServMedImageService {

  constructor(private http:HttpClient,private servPath:PathService) { }

  //Get and Delete subscribe inside component
  //Post and Put subscribe inside service
  
  

  //get all MedImages
  getMedImagesAll():Observable<ResMedImage[]>{
    return this.http.get<ResMedImage[]>(this.servPath.getPathMedImage());
  }

  //get MedImage by ID
  getMedImageByID(code:number):Observable<ResMedImage>{
    return this.http.get<ResMedImage>(this.servPath.getPathMedImage()+"/"+code);
  
  }

  //Add a new MedImage
  addMedImage(newMedImage:ResMedImage){
    return this.http.post(this.servPath.getPathMedImage(),newMedImage);
  }
  
  //update an existing MedImage
  updateMedImage(updatedMedImage:ResMedImage){
  return this.http.put(this.servPath.getPathMedImage()+"/"+updatedMedImage.code.toString(),updatedMedImage);
  }
 
  //Delete an existing MedImage with all his history and related entities
  deleteMedImage(code:number){
    return this.http.delete(this.servPath.getPathMedImage()+"/"+code.toString())
  }

}

  

