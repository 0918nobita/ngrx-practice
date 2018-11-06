import { Action } from '@ngrx/store';
import { CounterActionTypes } from './counter.actions';

export interface State {
  // カウント処理における State を定義する
  count: number;
}

export const initialState: State = {
  // カウント処理における State の初期値を指定する
  count: 0
};

// State を変更する場合は、
// State がイミュータブルになるように元の State のは変更を加えず、
// Object.assign で新規にオブジェクトを生成する
export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case CounterActionTypes.CountIncrement:
      return Object.assign({}, { ...state, count: state.count + 1 });
    case CounterActionTypes.CountDecrement:
      return Object.assign({}, { ...state, count: state.count - 1 });
    default:
      return state;
  }
}

// コンポーネントで State の count を取得するための関数を定義する
export const getCount = (state: State) => state.count;
