import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = "";
  password: string = "";

  constructor(private authService: AuthService, private route: Router) { }

  login(){
    this.authService.login(this.email, this.password)
      .subscribe({
        next: (response) => {
          this.route.navigate(["/home"]);
          console.log("Login successful", response);
        },
        error: (error) => {
          console.error("Login failed", error);
        }
      })
  }
}
