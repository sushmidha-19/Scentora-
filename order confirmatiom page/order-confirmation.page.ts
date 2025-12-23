import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './order-confirmation.page.html',
  styleUrls: ['./order-confirmation.page.scss'],
})
export class OrderConfirmationPage implements OnInit {
  order: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.order = nav?.extras.state?.['order'];
  }

  ngOnInit() {
    console.log('Order confirmation:', this.order);
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
