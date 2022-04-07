export interface Guest {
  id: string;
  firstGuest: string;
  secondGuest?: string;
  thirdGuest?: string;
  confirmed: boolean;
  numberOfGuests: number;
}

export default Guest;
