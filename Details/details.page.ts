import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage {
  product: any;
  customer_name = '';
  customer_email: string = '';  // ✅ fixed here
  address = '';
  quantity = 1;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const nav = history.state;
    this.product = nav.product;
    console.log('Loaded product:', this.product);

    // ✅ Get email from localStorage
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      this.customer_email = storedEmail;
    }
  }

  placeOrder() {
    const orderData = {
      customer_name: this.customer_name,
      address: this.address,
      quantity: this.quantity,
      product_name: this.product?.name,
      product_price: this.product?.price,
      customer_email: this.customer_email  // ✅ Send email to backend
    };

    this.http.post('http://127.0.0.1:8000/place-order/', orderData).subscribe(
  res => {
    localStorage.setItem('email', this.customer_email); // ✅ Store email
    this.router.navigate(['/order-confirmation'], { state: { order: orderData } });
  },
  err => console.error(err)
);

  }
}
