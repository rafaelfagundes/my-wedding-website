export type Guest = {
  id: string;
  internalId?: string;
  firstGuest: string;
  secondGuest?: string;
  thirdGuest?: string;
  confirmed: boolean;
  numberOfGuests: number;
};

export type GuestConfirmation = {
  alreadyConfirmed: boolean;
  confirmed: boolean;
  numberOfGuests: number;
};

export default Guest;
