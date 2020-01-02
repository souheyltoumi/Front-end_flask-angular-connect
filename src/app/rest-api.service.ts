import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {
  
  // Define API
  apiURL = 'https://backend-mvc-angular.herokuapp.com';
   cli;
   val;

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 'Accept': 'text/plain'      
      
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEmployees(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/viewUsers')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

 /* // HttpClient API get() method => Fetch employee
  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(this.apiURL + '/employees/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  */

  // HttpClient API put() method => Update employee
  loginEmployee( user,pass): Observable<String>{
    let httpParams = new HttpParams().set('user', user.toString()).set('pass', pass.toString());

  
    return this.http.post<String>(this.apiURL + '/login?user='+user.toString()+'&pass='+pass.toString(),{params:httpParams},{responseType:'json'})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  registerEmployee( user,mail,cin): Observable<String>{
    let httpParams = new HttpParams().set('user', user.toString()).set('email', mail.toString()).set('cin', cin.toString());

  
    return this.http.post<String>(this.apiURL + '/regiser?user='+user.toString()+'&email='+mail.toString()+'&cin='+cin.toString(),{params:httpParams},{responseType:'json'})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
  prediction( ny,cal,fol,rnd,admin,mark): Observable<String>{
    let httpParams = new HttpParams().set('NewYork', ny.toString()).set('California', cal.toString()).set('Florida', fol.toString()).set('RnD_Spend', rnd.toString()).set('Admin_Spend', admin.toString()).set('Market_Spend', mark.toString());

  
    return this.http.post<String>(this.apiURL + '/predict?NewYork='+ny.toString()+'&California='+cal.toString()+'&Florida='+fol.toString()+'&RnD_Spend='+rnd.toString()+'&Admin_Spend='+admin.toString()+'&Market_Spend='+mark.toString(),{params:httpParams},{responseType:'json'})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  // Error handling 
  handleError(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }

}