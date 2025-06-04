import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductCarouselComponent } from "../../../products/components/product-carousel/product-carousel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css',
})
export class ProductPageComponent { 

  productSlug = inject(ActivatedRoute).snapshot.params['isSlug']
  productService = inject(ProductService)

  productResource = rxResource({
    request: () => ({ slug : this.productSlug}),
    loader: ({ request }) => {
      return this.productService.getProductsByIdSlug(request.slug)
    }
  })

}
