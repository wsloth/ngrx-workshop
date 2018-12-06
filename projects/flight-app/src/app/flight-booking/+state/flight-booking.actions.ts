import { Action } from '@ngrx/store';

export enum FlightBookingActionTypes {
  LoadFlightBookings = '[FlightBooking] Load FlightBookings'
}

export class FlightBooking implements Action {
  readonly type = FlightBookingActionTypes.LoadFlightBookings;
}

export type FlightBookingActions = LoadFlightBookings;
