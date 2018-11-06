import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  // Action ごとに型を定義する
  CountIncrement = '[Counter] Increment Count',
  CountDecrement = '[Counter] Decrement Count'
}

// Action ごとに @ngrx/store の Action インタフェースを実装したクラスを定義する
// 複雑な処理をする場合はコンストラクタで引数を取る
export class CountIncrement implements Action {
  readonly type = CounterActionTypes.CountIncrement;
}

export class CountDecrement implements Action {
  readonly type = CounterActionTypes.CountDecrement;
}

// 上記で定義した Action 実装クラスを集約した型を定義する ( Reducer で使用する )
export type CounterActions = CountIncrement | CountDecrement;
