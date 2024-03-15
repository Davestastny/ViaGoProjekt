import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})

export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  navigateToProductDetail(slug: string): void {
    this.router.navigate(['/product-detail', slug]);
  }
}
