import { Component, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [FormsModule]
})
export class RegisterComponent {
  public username: string = "";
  public password: string = "";
  public email: string = "";

  public constructor(private authService: AuthService) {}

  public register(){
    this.authService.register(this.username, this.password, this.email)
      .subscribe({
        next: (response) => {
          console.log("Registration successful", response);
        },
        error: (error) => {
          console.error("Registration failed", error);
        }
      });
  }
}
