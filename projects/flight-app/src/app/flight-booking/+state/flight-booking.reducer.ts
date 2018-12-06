import { Action } from '@ngrx/store';
import { FlightBookingActions, FlightBookingActionTypes } from './flight-booking.actions';

export interface FlightBookingState {

}

export const initialState: FlightBookingState = {

};

export function reducer(state = initialState, action: FlightBookingActions): FlightBookingState {
  switch (action.type) {

    case FlightBookingActionTypes.LoadFlightBookings:
      return state;


    default:
      return state;
  }
}
