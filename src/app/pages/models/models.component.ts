import { Component } from '@angular/core';
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-models',
  standalone: true,
    imports: [
        ProductCardComponent
    ],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {

}
