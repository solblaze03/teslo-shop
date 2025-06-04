import { Component, inject } from '@angular/core';
import { CardComponent } from "../../../products/components/Card/Card.component";
import { ProductService } from '../../../products/services/products.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-page',
  imports: [CardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent { 

  productsService = inject(ProductService)

  activatedRoute = inject(ActivatedRoute)

  currentPage = toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map( params =>  (params.get('page') ? +params.get('page')! : 1 )),
      map( page => (isNaN(page) ? 1 : page))
    ),{
      initialValue: 1,
    }
  )

  productResource = rxResource({
    request: () => ({ page: this.currentPage() -1 }),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        offset: request.page * 9
      })
    }
  })

}

