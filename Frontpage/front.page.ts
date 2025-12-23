import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage {
  bestsellers = [
    { name: 'Rose Bloom', price: 999, image: 'assets/images/perfume1.jpg' },
    { name: 'Midnight Musk', price: 1499, image: 'assets/images/perfume2.jpg' },
    { name: 'Citrus Glow', price: 1099, image: 'assets/images/perfume3.jpg' },
    { name: 'Oudh Majesty', price: 1899, image: 'assets/images/perfume4.jpg' },
    { name: 'Lavender Mist', price: 799, image: 'assets/images/perfume5.jpg' },
    { name: 'Vanilla Silk', price: 1299, image: 'assets/images/perfume6.jpg' },
    { name: 'Ocean Breeze', price: 1199, image: 'assets/images/perfume7.jpg' },
    { name: 'Amber Luxe', price: 1799, image: 'assets/images/perfume8.jpg' }
  ];

  // ✅ This method allows scrolling to the contact section
  scrollToContact() {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
