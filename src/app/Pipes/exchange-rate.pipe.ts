import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeRate',
  standalone: true,
})
export class ExchangeRatePipe implements PipeTransform {
  currencies: any = {
    EGP: 30.9,
    EUR: 1 / 1.09,
  };

  transform(value: number, currency: string): number {
    return value * (this.currencies[currency] || 1);
  }
}
