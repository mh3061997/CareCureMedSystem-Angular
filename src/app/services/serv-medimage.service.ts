import { Injectable } from '@angular/core';
import { ResMedImage } from '../interfaces/res-med-image';

@Injectable({
  providedIn: 'root'
})
export class ServMedimageService {

  constructor() { }

  
  //get all MedImages
  getMedImagesAll(){

  }

  //get MedImage by ID
  getMedImageByID(code:number){

  }

  //Add a new MedImage
  addMedImage(newMedImage:ResMedImage){}
  
  //update an existing MedImage
  updateMedImage(updatedMedImage:ResMedImage){

  }
 
  //Delete an existing MedImage with all his history and related entities
  deleteMedImage(code:number){}

  
}
