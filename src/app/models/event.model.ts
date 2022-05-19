export interface BasisEvent {
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
  GroupOrder?: number;
}

export interface Event extends BasisEvent {
  Playabilities: [number];
  Subevents: SubEvent[];
}

export interface SubEvent {
  Id: number;
  Name: string;
  PublicationCode: number;
  StartTimeUtc: string; // "2022-11-21T10:00:00Z",
  BetradarMatchId: number;
  BetradarMatchUid: string; //"sr:match:32986721",
  NumQuote: number;
  EventId: number;
  EventTypeId: number;
  EventName: string;
  Markets: Markets[];
  SportName: string;
  GroupName: string;
  Participants: any;
  HasParticipants: boolean;
  NumberOfParticipants: number;
  SottoEventoTypeId: number;
}

export interface Markets {
  Id: number;
  Name: string;
  Order: number;
  Odds: Odd[];
  IsNewMarket: boolean;
  ShortName: string;
  NumberOfParticipants: number;
}

export interface Odd {
  Id: number;
  Value: number;
  Hnd: number;
  HndType: number;
  MarketId: number;
  SelectionId: number;
  Selection: string;
  PlayabilityId: number;
  IdClasseQuotaParamInstance: number;
  MarketParams: [];
}
