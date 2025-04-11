import { Component } from '@angular/core';
import { ComponentService } from '../component.service';
import { map, Observable, Subscription } from 'rxjs';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { LargestNumberPipe } from '../largest-number.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [AsyncPipe, LargestNumberPipe, CurrencyPipe, DatePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.less'
})
export class PipesComponent {
  public numbers$: Observable<any> | undefined;
  public number: number | undefined;
  public subscribes: Subscription = new Subscription();
  public today: Date = new Date();
  public dollars: number = 1000;
  public numArray: number[] = [];

  constructor(private service: ComponentService) {}

  ngOnInit() {
    this.numbers$ = this.service.getNumbers().pipe(map((results) => results.numbers));
  
    /**
     * This examples uses an instance of the LargestNumberPipe
     * by implementing it in typescript instead of the view (html).
     */
    this.subscribes.add(
      this.service.getNumbers()
      .pipe(map((results) => results.numbers))
      .subscribe((numbers) => {
        this.numArray = numbers;
        this.number = new LargestNumberPipe().transform(numbers);
      })
    )
  }

  ngOnDestroy() {
    this.subscribes.unsubscribe();
  }
}
