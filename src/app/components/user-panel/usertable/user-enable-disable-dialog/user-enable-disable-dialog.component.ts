
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResUserDao } from 'src/app/interfaces/res-user-dao';
import { ServUsersService } from 'src/app/services/serv-users.service';

@Component({
  selector: 'app-user-enable-disable-dialog',
  templateUrl: './user-enable-disable-dialog.component.html',
  styleUrls: ['./user-enable-disable-dialog.component.css']
})
export class UserEnableDisableDialogComponent implements OnInit {

  user: ResUserDao;
  enable:boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: ResUserDao ,enable:boolean},
    public dialogRef: MatDialogRef<UserEnableDisableDialogComponent>,
    private servUser: ServUsersService) {

    this.user = data.user;
    this.enable=data.enable;

    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);

    });
  }

  updateUserInformation(updatedUser: ResUserDao) {

    
    if(this.enable){
      this.servUser.enableUser(updatedUser).subscribe(response => {
        console.log("closing enable");
        
        this.dialogRef.close(true);
        console.log("closed enable");

      });

    }else if(!this.enable) {
      this.servUser.disableUser(updatedUser).subscribe(response => {
        console.log("closing disable");

        this.dialogRef.close(true);
        console.log("closed disable");

      });
    }
  

  }



  onUpdateUserSubmit() {
    
    this.updateUserInformation(this.user);

  }

  ngOnInit(): void {
  }

}
