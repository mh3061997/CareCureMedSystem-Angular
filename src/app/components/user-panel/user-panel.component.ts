import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResUserDao } from 'src/app/interfaces/res-user-dao';
import { ServUsersService } from 'src/app/services/serv-users.service';
import { UserAddNewDialogComponent } from './user-add-new-dialog/user-add-new-dialog.component';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  users:ResUserDao[];
  
  ngOnInit(): void {
  }
  constructor(public dialogAddUser:MatDialog,private servUsers:ServUsersService) { 
    this.servUsers.getUsersAll().subscribe(users =>{

      this.users = users;
    });
  }



  openNewUserDialog(){
    const dialogRef =  this.dialogAddUser.open(UserAddNewDialogComponent);
   
     dialogRef.afterClosed().subscribe(closed =>{
    
       this.servUsers.getUsersAll().subscribe(users =>{
 
         this.users = users;
         });
 
     });
   
   }
   
}
