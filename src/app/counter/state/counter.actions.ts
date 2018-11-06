import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  LoadCounters = '[Counter] Load Counters'
}

export class LoadCounters implements Action {
  readonly type = CounterActionTypes.LoadCounters;
}

export type CounterActions = LoadCounters;
