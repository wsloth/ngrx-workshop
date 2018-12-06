import { Action } from '@ngrx/store';
import { Flight } from 'projects/flight-api/src/lib/models/flight';

export enum FlightBookingActionTypes {
  FlightsLoaded = '[FlightBooking] Loaded',
  FlightUpdated = '[FlightBooking] Updated'
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;

  constructor(readonly payload: { flights: Flight []}) {}
}

export class FlightUpdated implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdated;

  constructor(readonly payload: { flight: Flight}) {}
}

// Union type, groups multiple type possibilities into one
export type FlightBookingActions = FlightsLoaded | FlightUpdated;
