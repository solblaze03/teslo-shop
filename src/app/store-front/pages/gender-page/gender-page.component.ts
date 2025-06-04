import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ProductService } from '../../../products/services/products.service';
import { CardComponent } from "../../../products/components/Card/Card.component";
import { PaginationComponent } from "../../../shared/components/pagination/pagination.component";

@Component({
  selector: 'app-gender-page',
  imports: [CardComponent, PaginationComponent],
  templateUrl: './gender-page.component.html',
  styleUrl: './gender-page.component.css',
})
export class GenderPageComponent {

  activatedRoute = inject(ActivatedRoute)

  gender = toSignal(
    this.activatedRoute.params.pipe(
      map(({ gender }) => gender)
    )
  )

  
  productsService = inject(ProductService)

  productResource = rxResource({
    request: () => ({gender: this.gender() , page: this.currentPage() -1}),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        gender: request.gender,
        offset: request.page * 9
      })
    }
  })

  currentPage = toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map( params => (params.get('page') ? + params.get('page')! : 1) ),
      map( page => (isNaN(page) ? 1 : page) )
    ), {
      initialValue : 1
    }
  )





}
