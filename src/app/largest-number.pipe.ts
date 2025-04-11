import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'largestNumber',
  standalone: true
})
export class LargestNumberPipe implements PipeTransform {
  private largestNumber: number | undefined;

  transform(value: number[]): number | undefined {
    value.forEach(element => {
      if (this.largestNumber == undefined || this.largestNumber < element) {
        this.largestNumber = element;
      }
    });
    return this.largestNumber;
  }
}
