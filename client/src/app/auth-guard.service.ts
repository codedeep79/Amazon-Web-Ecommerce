import { Injectable } from '@angular/core';
import { CanActivate, 
         ActivatedRouteSnapshot, 
         RouterStateSnapshot, 
         Router} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(){
    var token = localStorage.getItem('token');  
    if (token)
    {
      this.router.navigate(['/']);
      return false;
    }
    else
    {
      return true;
    }
  }

}
