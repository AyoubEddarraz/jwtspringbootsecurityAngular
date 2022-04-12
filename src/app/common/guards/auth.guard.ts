import { AuthStore } from './../store/auth.store';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authStore: AuthStore, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean  {

    if(this.authStore.authenticated.value == false){
      this.router.navigateByUrl("/home");
      return false;
    }

    return true;
  }

}
