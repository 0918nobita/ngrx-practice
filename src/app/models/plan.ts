import { RegisteredBook } from './registered-book';

export interface Plan {
  title: string;
  desc: string;
  book: RegisteredBook;
  progress: number;
  uid: string;
  created: firebase.firestore.Timestamp;
  modified: firebase.firestore.Timestamp;
}
