import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './state';

@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('counter', fromCounter.reducers, {
      metaReducers: fromCounter.metaReducers
    })
  ],
  exports: [CounterComponent]
})
export class CounterModule {}
