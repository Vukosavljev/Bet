export interface Sport {
  Id: number;
  Antepost: number;
  Name: string;
  NumQuote: number;
  NumSubevents: number;
  Order: number;
}

export interface Event {
  Id: number;
  Name: string;
  Order: number;
  SportId: number;
  SportName: string;
  GroupId: number;
  GroupName: string;
  Antepost: number;
  NumSubevents: number;
  EventTypeId: number;
  GroupOrder: number;
}

export interface League {
  Id: number;
  Name: string;
  Order: number;
  NumQuote: number;
  Sport: string;
  SportId: number;
  Antepost: number;
  Events: Event[];
}
