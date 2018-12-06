import { Action } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';

export interface FlightBookingStateRef {

}

export interface FlightBookingState {

}

export const initialState: FlightBookingState = {

};

export function reducer(state = initialState, action: FlightBookingActions): FlightBookingState {
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoaded:
      return {...state, flights: action.payload.flights };

    case FlightBookingActionTypes.FlightUpdated:
      return state;

    default:
      return state;
  }
}
