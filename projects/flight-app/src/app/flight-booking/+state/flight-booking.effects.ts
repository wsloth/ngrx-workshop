import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LoadFlights, FlightBookingActionTypes, FlightsLoaded, FlightsLoadedError } from './flight-booking.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { FlightService } from '@flight-workspace/flight-api';
import { of } from 'rxjs';

@Injectable()
export class FlightBookingEffects {

  @Effect()
  loadFlights$ = this.actions$
    .ofType(FlightBookingActionTypes.LoadFlights)
    .pipe(
      switchMap((action: LoadFlights) => {
        return this.flightService.find(action.from, action.to, action.urgent)
          .pipe(
            map(flights => new FlightsLoaded(flights)),
            catchError(error => of(new FlightsLoadedError(error)))
          )
      })
    );

  constructor(private actions$: Actions, private flightService: FlightService) {}
}
