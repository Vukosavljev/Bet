import { BasisEvent } from './event.model';

export interface League {
  Id: number;
  Name: string;
  Order: number;
  NumQuote: number;
  Sport: string;
  SportId: number;
  Antepost: number;
  Events: BasisEvent[];
}
