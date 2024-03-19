import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { CartItem } from '../../models/cart-item.model';
import {CurrencyPipe} from "@angular/common"; // Cesta k souboru modelu CartItem



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = []; // Explicitně určuje typ jako CartItem[]

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
