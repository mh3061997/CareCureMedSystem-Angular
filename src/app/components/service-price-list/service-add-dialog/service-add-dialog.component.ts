import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResServicePriceList } from 'src/app/interfaces/res-service-price-list';
import { ResPatient } from 'src/app/interfaces/res-patient';
import { ServServicePriceListService } from 'src/app/services/serv-service-price-list.service';
import { ServUtilitiesService } from 'src/app/services/serv-utilities.service';

@Component({
  selector: 'app-service-add-dialog',
  templateUrl: './service-add-dialog.component.html',
  styleUrls: ['./service-add-dialog.component.css']
})
export class ServiceAddDialogComponent implements OnInit {

 
  @ViewChild('newServicePriceListForm', { static: false }) newServicePriceListForm: NgForm;

  types:string[] =['Dentistry','Dermatology'];

  constructor(
    public dialogRef: MatDialogRef<ServiceAddDialogComponent>,
    private servServicePriceList:ServServicePriceListService,
    private serUtils:ServUtilitiesService) {
      
 

      dialogRef.backdropClick().subscribe(result => {
        dialogRef.close(false);
       // console.log("backclick")
       });

    }
  
  ngOnInit(): void {
  }


onNewServiceSubmit(){

  console.log(this.newServicePriceListForm.value);
  const newServicePriceList:ResServicePriceList = {
     //code must ALWAYS be 0 when inserting bec. it wont insert if code is existing and 
    //it starts from 1 so 0 always available
    code:0,
    name:this.newServicePriceListForm.value.name,
    price:this.newServicePriceListForm.value.price,
    speciality:this.newServicePriceListForm.value.speciality
  }
  
  this.servServicePriceList.addServicePriceList(newServicePriceList).subscribe(() =>{
    this.dialogRef.close(true);
  })
}

}




  


