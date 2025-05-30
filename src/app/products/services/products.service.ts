import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsResponse } from '../interfaces/product.interface';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductService {
    
    private http = inject(HttpClient);

    getProducts(){
        return this.http.get<ProductsResponse>(`${environment.api}/products`)
    }
    
}