import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../../environments/environment';
import * as fromCounter from './counter.reducer';

export interface State {
  counter: fromCounter.State;
}

// Store の実態
// Reducer を追加した時には、ここに追加されていく
export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

// コンポーネントで State のプロパティを取得するための関数を定義する
// 複数コンポーネントで使うたびに定義するのは冗長であるため、ここで共通的に定義する
export const getCounterFeatureState = createFeatureSelector<State>('counter');
export const getCounter = createSelector(
  getCounterFeatureState,
  s => s.counter
);
export const getCount = createSelector(getCounter, fromCounter.getCount);
