
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServMedImageService } from 'src/app/services/serv-medimage.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-patient-add-officialdoc-dialog',
  templateUrl: './patient-add-officialdoc-dialog.component.html',
  styleUrls: ['./patient-add-officialdoc-dialog.component.css']
})
export class PatientAddOfficialdocDialogComponent implements OnInit {


  medImageType: string;

  patient: ResPatient;
  base64Image: string;

  @ViewChild('newMedImageForm', { static: false }) newMedImageForm: NgForm;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { patient: ResPatient, medImageType: string },
    public dialogRef: MatDialogRef<PatientAddOfficialdocDialogComponent>,
    private servMedImage: ServMedImageService) {

    this.medImageType = data.medImageType;
    this.patient = data.patient;


    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
     // console.log("backclick")
     });
  }


  onNewMedImageSubmit() {
 
    
    const newMedImage: ResMedImage = {
      code: 0,
      dateAdded: new Date().toISOString(),
      organ: "Official",
      dateMade: new Date().toISOString(),
      type: "Official",
      subType: this.newMedImageForm.value.type,
      image: this.base64Image,
      patient:this.patient
    }

    this.addMedImage(newMedImage);
    // console.log(newMedImage);
    // console.log(this.base64Image);
  }


  addMedImage(newMedImage: ResMedImage) {

    this.servMedImage.addMedImage(newMedImage).subscribe(response => {

      this.dialogRef.close(true);

    });
  }



  onFileChanged(event: any) {
    const file = event.target.files[0];

    //console.log(event.target);

    this.getBase64(file).then(base64 => {
      this.base64Image = <string>base64;
    }); // prints the base64 string
    //console.log(base64);
  }

  getBase64(file: File) {

    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () { resolve(reader.result); };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  }





  ngOnInit(): void {

  }

}













