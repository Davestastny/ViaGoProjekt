import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { Router } from "@angular/router";
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../models/cart-item.model'; // Předpokládá, že CartItem je ve správné cestě

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) {}

  navigateToProductDetail(slug: string): void {
    this.router.navigate(['/product-detail', slug]);
  }

  addToCart(): void {
    const itemToAdd: CartItem = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1 // Předpokládá se, že přidáváte jednu položku; upravte dle potřeby
    };
    this.shoppingCartService.addItem(itemToAdd);
    // Přesměrování do košíku je volitelné, závisí na vaší aplikaci
    this.router.navigate(['/cart']);
  }
}
