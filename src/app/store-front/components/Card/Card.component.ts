import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../products/interfaces/product.interface';
import { environment } from '../../../../environments/environment';
import { SlicePipe } from '@angular/common';

const api = environment.api;
@Component({
  selector: 'app-card',
  imports: [RouterLink, SlicePipe],
  templateUrl: './Card.component.html',
  styleUrl: './Card.component.css',
})
export class CardComponent {

  

  product = input<Product>()

  imageUrl = computed(() => {
    return `${api}/files/product/${this.product()?.images[0]}`
  })


 }
