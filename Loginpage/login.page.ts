import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';
// Adjust path as needed


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  email = '';
  password = '';



constructor(
  private api: ApiService,
  private router: Router
) {}


  login() {
  const credentials = {
    email: this.email,
    password: this.password
  };

  this.api.call_http_post({
  url: environment.API_URL + 'api/login/',
  data: credentials,
  successCb: (res: any) => {
  if (res.message === 'Login successful') {
    localStorage.setItem('email', this.email);  // ✅ Save email to localStorage
    this.router.navigate(['/home']);
  } else {
    alert('Invalid credentials');
  }
},


  errorCb: (err:any) => {
    console.error('Login error:', err);
    alert('Server error');
  }
});

}

}
