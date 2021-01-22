
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResMedImage } from 'src/app/interfaces/res-med-image';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServMedImageService } from 'src/app/services/serv-medimage.service';
import { ServPatientService } from 'src/app/services/serv-patient.service';

@Component({
  selector: 'app-patient-add-medimage-dialog',
  templateUrl: './patient-add-medimage-dialog.component.html',
  styleUrls: ['./patient-add-medimage-dialog.component.css']
})
export class PatientAddMedimageDialogComponent implements OnInit {


  medImageType: string;

  patient: ResPatient;
  base64Image: string;

  @ViewChild('newMedImageForm', { static: false }) newMedImageForm: NgForm;


  constructor(@Inject(MAT_DIALOG_DATA) public data: { patient: ResPatient, medImageType: string },
    public dialogRef: MatDialogRef<PatientAddMedimageDialogComponent>,
    private servMedImage: ServMedImageService) {

    this.medImageType = data.medImageType;
    this.patient = data.patient;


    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);
     // console.log("backclick")
     });
  }


  onNewMedImageSubmit() {
    let medImageTypeObj: string;
    switch (this.medImageType) {
      case "Lab Tests":
        medImageTypeObj = "Lab";
        break;
      case "Radiology":
        medImageTypeObj = "Radiology";
        break;
      case "Prescriptions":
        medImageTypeObj = "Prescription";
        break;
      case "Official Documents":
        medImageTypeObj = "Official";
        break;
      default:
        medImageTypeObj = "Lab";
        break;
    }
    const newMedImage: ResMedImage = {
      code: 0,
      dateAdded: new Date().toISOString(),
      organ: this.newMedImageForm.value.organ,
      dateMade: this.newMedImageForm.value.dateMade.toISOString(),
      type: medImageTypeObj,
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






