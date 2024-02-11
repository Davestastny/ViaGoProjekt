import { Component } from '@angular/core';
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
