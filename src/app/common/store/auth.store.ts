import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({providedIn: "root"})

export class AuthStore {

  authenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated = this.authenticated.asObservable();
  authenticatedStatus = (authenticated: boolean) => this.authenticated.next(authenticated);


}
