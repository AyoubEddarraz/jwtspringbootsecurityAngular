import { Component, OnInit } from '@angular/core';
import { AuthStore } from './common/store/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'jwtauthentication';

  authenticated: boolean = false;

  constructor(private authStore: AuthStore) {}

  ngOnInit(): void {

    // Check if the user is authenticated
    this.authStore.isAuthenticated.subscribe((Response: boolean) => {
      this.authenticated = Response;
    })

  }

}
