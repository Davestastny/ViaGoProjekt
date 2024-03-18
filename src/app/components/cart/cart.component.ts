import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.shoppingCartService.getItems();
  }

  removeFromCart(itemId: string) {
    this.shoppingCartService.removeItem(itemId);
    this.loadCartItems(); // Refresh the list
  }

  clearCart() {
    this.shoppingCartService.clearCart();
    this.loadCartItems(); // Clear the display
  }
}
