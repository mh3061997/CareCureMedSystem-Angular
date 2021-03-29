import {AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ResUserDao } from 'src/app/interfaces/res-user-dao';
import { UserChangeRoleDialogComponent } from './user-change-role-dialog/user-change-role-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ServUsersService } from 'src/app/services/serv-users.service';
import { UserEnableDisableDialogComponent } from './user-enable-disable-dialog/user-enable-disable-dialog.component';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements AfterViewInit, OnChanges {

  
  @Input()
  users:ResUserDao[];



  
  displayedColumns: string[] = ['code', 'username', 'role', 'name','enabled',' '];

  dataSource: MatTableDataSource<ResUserDao>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cdr: ChangeDetectorRef,
    private dialogChangeUserRole:MatDialog,
    private dialogEnableDisableUser:MatDialog,
    private servUsers:ServUsersService){

  }
  
  ngAfterViewInit() {
  
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.users);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
     // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.cdr.detectChanges();

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['users']) {
      this.dataSource = new MatTableDataSource(this.users);
    }
}

openChangeRoleDialog(user:ResUserDao){

  const dialogRef =  this.dialogChangeUserRole.open(UserChangeRoleDialogComponent,{
    data:{
      user:user
    },
    disableClose:true
  });

  dialogRef.afterClosed().subscribe(closed =>{
 
   if(closed){
    this.servUsers.getUsersAll().subscribe(users =>{

      this.users = users;
      });
   }

  });

}

openEnableDisableDialog(user:ResUserDao,enable:boolean){

  const dialogRef =  this.dialogEnableDisableUser.open(UserEnableDisableDialogComponent,{
    data:{
      user:user,
      enable:enable
    },
    disableClose:true
  });

  dialogRef.afterClosed().subscribe(closed =>{
 
   if(closed){
    this.servUsers.getUsersAll().subscribe(users =>{
    
      this.users = users;
      });
   }

  });


}


}





  





 
   




