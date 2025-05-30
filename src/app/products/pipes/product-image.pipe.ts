import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'productImage'
})

export class ProductImagePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        
    }
}