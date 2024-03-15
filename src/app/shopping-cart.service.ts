import { Injectable } from '@angular/core';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  private cartKey = 'angularShoppingCart';

  constructor() { }

  addItem(item: CartItem): void {
    const cart: CartItem[] = this.getItems();
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.push(item);
    }
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  removeItem(itemId: string): void {
    let cart = this.getItems();
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  getItems(): CartItem[] {
    const itemsJSON = localStorage.getItem(this.cartKey);
    return itemsJSON ? JSON.parse(itemsJSON) : [];
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}
