import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  userRecord: any;
  userType: any;

  constructor() { } 
   
  ngOnInit(): void {
    this.getUserroleRecord()
  }   
  getUserroleRecord(){
    this.userRecord = JSON.parse(localStorage.getItem('user')); 
    this.userType =  this.userRecord.role.toString();
  }
}
    