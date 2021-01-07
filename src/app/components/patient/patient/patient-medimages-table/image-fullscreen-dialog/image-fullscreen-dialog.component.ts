import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-image-fullscreen-dialog',
  templateUrl: './image-fullscreen-dialog.component.html',
  styleUrls: ['./image-fullscreen-dialog.component.css']
})
export class ImageFullscreenDialogComponent implements OnInit {
  
 
  image:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data:{image:string}){
  
    this.image=data.image;
  }

  ngOnInit(): void {
  }

}
