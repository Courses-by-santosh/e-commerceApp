import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@org/common/store';

@Pipe({
  name: 'totalAmount',
  standalone: true,
})
export class TotalAmountPipe implements PipeTransform {
  transform(products: Product[] | undefined, ...args: unknown[]): number {
    return products?.reduce((acc, curr) => {
      return acc + curr.price * curr?.quantity;
    }, 0) || 0;
  }
}
