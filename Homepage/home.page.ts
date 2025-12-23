import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // ✅ Import HttpClient

type Product = {
  name: string;
  category: string;
  price: number;
  image: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  selectedCategory: string = 'all';

  allProducts: Product[] = [
    { name: 'Amber Nights', category: 'Men', price: 1499, image: 'assets/images/men1.jpg' },
    { name: 'Blossom Bloom', category: 'Women', price: 1799, image: 'assets/images/women1.jpg' },
    { name: 'Royal Oud', category: 'Luxury', price: 2999, image: 'assets/images/luxury1.jpg' },
    { name: 'Citrus Mist', category: 'Unisex', price: 1599, image: 'assets/images/unisex1.jpg' },
    { name: 'Midnight Musk', category: 'Men', price: 1399, image: 'assets/images/perfume3.jpg' },
    { name: 'Velvet Rose', category: 'Women', price: 1699, image: 'assets/images/women2.jpg' }
  ];

  filteredProducts: Product[] = [];
  orders: any[] = []; // ✅ Declare orders array

  constructor(private http: HttpClient) {} // ✅ Inject HttpClient

  ngOnInit() {
    this.filterProducts();
    const email = localStorage.getItem('email');  // <-- must match what backend expects

    if (email) {
  this.http.get<any[]>(`http://127.0.0.1:8000/my-orders/?email=${email}`)
    .subscribe(
      data => {
        this.orders = data;
        console.log('Fetched orders:', this.orders);
      },
      error => {
        console.error('Failed to fetch orders', error);
      }
    );
}

  }

  filterProducts() {
    if (this.selectedCategory === 'all') {
      this.filteredProducts = this.allProducts;
    } else {
      this.filteredProducts = this.allProducts.filter(
        p => p.category === this.selectedCategory
      );
    }
  }

  serialize(product: Product): string {
    return JSON.stringify(product);
  }
}
