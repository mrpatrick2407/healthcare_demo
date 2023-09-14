import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../service/login.service';


@Injectable({
  providedIn: 'root' // Or provide in a specific module if needed
}) 
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService,private router:Router) {}

  canActivate(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // Use this.loginService to access the Loginservice methods and properties
    // Add your logic and return true or false based on your requirements
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.router.navigate(["/login"])
    return false; // Or false based on your authentication logic
  }
}
