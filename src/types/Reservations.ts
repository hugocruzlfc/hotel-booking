export interface Reservation {
  hotel: number;
  dates: Dates;
}

export type Dates = {
  startDate: string;
  endDate: string;
};
