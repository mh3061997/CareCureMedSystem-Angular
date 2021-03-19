
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResUserDao } from 'src/app/interfaces/res-user-dao';
import { ServUsersService } from 'src/app/services/serv-users.service';

@Component({
  selector: 'app-user-change-role-dialog',
  templateUrl: './user-change-role-dialog.component.html',
  styleUrls: ['./user-change-role-dialog.component.css']
})
export class UserChangeRoleDialogComponent implements OnInit {

  user: ResUserDao;
  @ViewChild('changeRoleForm', { static: false }) changeRoleForm: NgForm;

  ngOnInit(): void {
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: { user: ResUserDao },
    public dialogRef: MatDialogRef<UserChangeRoleDialogComponent>,
    private servUser: ServUsersService) {

    this.user = data.user;

    dialogRef.backdropClick().subscribe(result => {
      dialogRef.close(false);

    });
  }

  updateUserInformation(updatedUser: ResUserDao) {

    console.log(updatedUser);

    this.servUser.changeRoleUser(updatedUser).subscribe(response => {

      this.dialogRef.close(true);

    });
    
  }



  onUpdateUserSubmit() {
    this.user.roles = [{"id":0,"name":this.changeRoleForm.value.role}];
    this.updateUserInformation(this.user);
  }


}
