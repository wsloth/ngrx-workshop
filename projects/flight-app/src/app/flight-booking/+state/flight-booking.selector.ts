import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FlightBookingState } from './flight-booking.reducer';

export const getFlightBookingState = createFeatureSelector<FlightBookingState>('flightBooking');

export const getFlightsSlice = (fb: FlightBookingState) => fb.flights;

export const getFlights = createSelector(getFlightBookingState, getFlightsSlice);