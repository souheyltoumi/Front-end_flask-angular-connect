import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  employeeData: any = {};

  title = 'Frontapp';
  Users: any = [];

  constructor(
    public restApi: RestApiService,private router: Router
  ) { }
  ngOnInit() {
    this.loadEmployees();
    console.log(this.Users);

  }
  login(data1,data2){
    this.employeeData.user=data1;
    this.employeeData.pass=data2;
    console.log(this.employeeData);

    return this.restApi.loginEmployee(data1,data2).subscribe((data: {}) => {
      console.log(data);
      if(data!="Wrong Password"&&data!="not found"){
        console.log("login");
        this.restApi.cli=data;
        this.router.navigateByUrl('/input');
      }
      else{alert("wrong")}
       
      
    })

    
    
    

    }
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      console.log(data);
      this.Users = data    })
  }
}
