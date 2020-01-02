import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent implements OnInit {

  constructor(  public restApi: RestApiService,private router: Router) { }

  ngOnInit() {
    console.log(this.restApi.cli)
  }
   predict(ny,cal,fol,rnd,admin,mark){
    return this.restApi.prediction(ny,cal,fol,rnd,admin,mark).subscribe((data: {}) => {
      console.log(data);
      this.restApi.val=data;
      this.router.navigateByUrl('/dashborad');

   
       
      
    })

  }
}
