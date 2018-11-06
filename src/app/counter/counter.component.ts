import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as CounterReducer from './state/counter.reducer';
import * as CounterActions from './state/counter.actions';
import { getCount } from './state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<CounterReducer.State>) {
    this.count$ = store.select(getCount);
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch(new CounterActions.CountIncrement());
  }

  decrement() {
    this.store.dispatch(new CounterActions.CountDecrement());
  }
}
