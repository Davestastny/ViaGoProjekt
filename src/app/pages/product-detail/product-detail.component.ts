import {Component, OnInit, Input} from '@angular/core';
import {ProductDataService} from '../../services/product-data.service';
import {Product} from '../../models/product.model';
import {ActivatedRoute} from '@angular/router';
import {Observable, of, switchMap} from "rxjs";
import {catchError} from "rxjs/operators";
import {AsyncPipe, KeyValuePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgOptimizedImage,
    NgForOf,
    KeyValuePipe
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product | null> = of(null);
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductDataService
  ) {
  }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        const slug = params.get('slug')!;
        return this.productService.getProduct(slug);
      }),
      catchError(error => {
        this.errorMessage = error.message;
        console.error('Error loading product:', error);
        return of(null);
      })
    );
  }

  parseParameters(parametersString: string): { [key: string]: any } {
    return JSON.parse(parametersString);
  }
}


