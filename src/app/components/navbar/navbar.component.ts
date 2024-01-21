import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  // input to show/hide logout button
  @Input() showLogout!: boolean;

  constructor(private authService: AuthService,
              private Router: Router          
    ) {}

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
    console.log("Logout clicked")
    console.log('After logout - navigating to login page');
     this.Router.navigate(['/login']);
  }
 
}
