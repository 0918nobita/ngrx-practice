import * as firebase from 'firebase/app';
import { ResolvedBook } from './resolved-book';
import { Plan } from './plan';

export interface Skill {
  content: string;
  book: ResolvedBook;
  plan: Plan;
  uid: string;
  created: firebase.firestore.Timestamp;
}
