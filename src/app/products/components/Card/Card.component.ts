import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { environment } from '../../../../environments/environment';
import { SlicePipe } from '@angular/common';
import { ProductImagePipe } from '../../pipes/product-image.pipe';

const api = environment.api;
@Component({
  selector: 'app-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './Card.component.html',
  styleUrl: './Card.component.css',
})
export class CardComponent {

  

  product = input.required<Product>()




 }
