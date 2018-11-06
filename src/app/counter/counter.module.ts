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
    // アプリ全体に counter という名前でストアを登録する
    StoreModule.forFeature('counter', fromCounter.reducers, {
      metaReducers: fromCounter.metaReducers
    })
  ],
  exports: [CounterComponent]
})
export class CounterModule {}
