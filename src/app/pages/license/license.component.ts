import { Component } from '@angular/core';
import {ProductCardComponent} from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-license',
  standalone: true,
    imports: [
        ProductCardComponent
    ],
  templateUrl: './license.component.html',
  styleUrl: './license.component.css'
})
export class LicenseComponent {

}
