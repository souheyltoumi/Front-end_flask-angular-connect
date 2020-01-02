import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  prediction;
  constructor(public restAp:RestApiService,private router: Router) { }

  ngOnInit() {
     this.prediction= this.restAp.val;
    console.log(this.prediction.toString());
  }
  return(){
    this.router.navigateByUrl('/login');

  }

}
