import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product, ProductsResponse } from '../interfaces/product.interface';
import { environment } from '../../../environments/environment';
import { Observable, of, tap } from 'rxjs';


interface Options{
    limit?: number;
    offset?: number;
    gender?: string
}


@Injectable({providedIn: 'root'})
export class ProductService {
    
    private http = inject(HttpClient);

    private productsCache = new Map<string, ProductsResponse>()

    private productCache = new Map<string, Product>

    

    getProducts(options: Options) : Observable<ProductsResponse>{

        const { limit = 9, offset = 0, gender = '' } = options;
        const key = `${limit}-${offset}-${gender}`

        if( this.productsCache.has(key)){
            return of(this.productsCache.get(key)!)
        }

        return this.http.get<ProductsResponse>(`${environment.api}/products`, {
            params: {
                limit,
                offset,
                gender,
            }
        }).pipe(
            tap(resp => this.productsCache.set(key, resp))
        )
        
    }

    getProductsByIdSlug(idSlug: string) : Observable <Product> {


        if( this.productCache.has(idSlug) ){
            return of(this.productCache.get(idSlug)!)
        }

        return this.http.get<Product>(`${environment.api}/products/${idSlug}`)
            .pipe(
                tap(product => this.productCache.set(idSlug , product))
            )
    }
    
}