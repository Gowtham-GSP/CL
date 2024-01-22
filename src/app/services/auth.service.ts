import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  shouldAllowAccess:any;
  constructor(private Http:HttpClient,private router: Router) { }
 private baseUrl = 'https://localhost:7056/api/User';
 
  loginUser(user: User){
    return this.Http.post<any>(this.baseUrl,user).pipe(
      map((res : any)=>{
        return res
      })
    )
  }

  canActivate(): boolean {
     this.shouldAllowAccess
 
    if (!this.shouldAllowAccess) {
      this.router.navigate(['/login']); // Redirect to login if condition is not met
    }
 
    return this.shouldAllowAccess;
  }
}

export interface User{
  Username:string;
  Password:string;
  extensionNumber:string;
}