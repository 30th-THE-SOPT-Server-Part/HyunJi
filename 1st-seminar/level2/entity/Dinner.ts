import { Member } from './Member';

export interface Dinner {
  member: Member[];
  shuffle(members: Member[]): Member[];
  organize(members: Member[]): void;
}
