import { Component, inject } from '@angular/core';
import { CardComponent } from "../../components/Card/Card.component";
import { ProductService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop'
import { map } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [CardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent { 

  productsService = inject(ProductService)

  productResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => {
      return this.productsService.getProducts()
    }
  })

}

