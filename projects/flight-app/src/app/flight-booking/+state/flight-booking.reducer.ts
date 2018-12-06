import { Action } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';
import { Flight } from 'projects/flight-api/src/lib/models/flight';

export interface FlightBookingStateRef {
  flightBooking: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[];
  basket: object;
}

export const initialState: FlightBookingState = {
  flights: [],
  basket: {}
};

export function reducer(state = initialState, action: FlightBookingActions): FlightBookingState {
  switch (action.type) {

    case FlightBookingActionTypes.FlightsLoaded:
      return {...state, flights: action.flights };

    case FlightBookingActionTypes.FlightUpdated:
      const flightIndex = state.flights.findIndex(x => x.id === action.flight.id);
      const newFlights = state.flights.slice();
      newFlights[flightIndex] = action.flight;
      return {...state, flights: newFlights};

    case FlightBookingActionTypes.FlightsLoadedError:
      console.error(action.error);
      return state;

    default:
      return state;
  }
}
