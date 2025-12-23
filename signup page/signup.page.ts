import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  // ✅ Declare form fields
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  // ✅ Signup method
  signup() {
    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    };
    console.log('Signing up with:', user);

    this.apiService.call_http_post({
      url: environment.API_URL + 'api/signup/',
      data: user,
      successCb: (res: any) => {
        console.log('Signup successful:', res);
        alert('Account created!');
        this.router.navigate(['/home']);
      },
      errorCb: (err: any) => {
        console.error('Signup error:', err);
        alert('Signup failed: ' + (err.error?.error || 'Unknown error'));
}

    });
  }
}
