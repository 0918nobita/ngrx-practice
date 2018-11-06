import { RegisteredBook } from '../models/registered-book';
import { Plan } from '../models/plan';

export interface State {
  bookshelf: RegisteredBook[];
  plans: Plan[];
}
