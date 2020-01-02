import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  employeeData: any;

  constructor( public restApi: RestApiService,private router: Router) { }

  ngOnInit() {
  }
  register(data1,data2,data3){
    /*this.employeeData.user=data1;
    this.employeeData.mail=data2;
    this.employeeData.cin=data3;

    console.log(this.employeeData);*/

    return this.restApi.registerEmployee(data1,data2,data3).subscribe((data: {}) => {
      this.router.navigateByUrl('/login');

       
      
    })

}}
