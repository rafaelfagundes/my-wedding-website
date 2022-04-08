export interface Guest {
  id: string;
  internalId?: string;
  firstGuest: string;
  secondGuest?: string;
  thirdGuest?: string;
  confirmed: boolean;
  numberOfGuests: number;
}

export interface GuestConfirmation {
  alreadyConfirmed: boolean;
  confirmed: boolean;
  numberOfGuests: number;
}

export default Guest;
