import { Action } from '@ngrx/store';
import { Flight } from 'projects/flight-api/src/lib/models/flight';

export enum FlightBookingActionTypes {
  LoadFlights = '[FlightBooking] Load',
  FlightsLoaded = '[FlightBooking] Loaded',
  FlightUpdated = '[FlightBooking] Updated',
  FlightsLoadedError = '[FlightBooking] Loaded Error'
}

export class LoadFlights implements Action {
  readonly type = FlightBookingActionTypes.LoadFlights;

  constructor(readonly from: string, readonly to: string, readonly urgent: boolean) {}
}

export class FlightsLoaded implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoaded;

  constructor(readonly flights: Flight []) {}
}

export class FlightUpdated implements Action {
  readonly type = FlightBookingActionTypes.FlightUpdated;

  constructor(readonly flight: Flight) {}
}

export class FlightsLoadedError implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedError;

  constructor(readonly error: Error) {}
}



// Union type, groups multiple type possibilities into one
export type FlightBookingActions = FlightsLoaded | FlightUpdated | FlightUpdated | FlightsLoadedError;
