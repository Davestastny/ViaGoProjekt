import { Component } from '@angular/core';
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-nolicense',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './nolicense.component.html',
  styleUrl: './nolicense.component.css'
})
export class NolicenseComponent {

}
