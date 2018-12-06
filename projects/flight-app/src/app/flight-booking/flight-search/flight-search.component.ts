import { Component, OnInit } from '@angular/core';
import { FlightService, Flight } from '@flight-workspace/flight-api';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { FlightBookingStateRef } from '../+state/flight-booking.reducer';
import { FlightsLoaded, FlightUpdated } from '../+state/flight-booking.actions';
import { getFlights } from '../+state/flight-booking.selector';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg'; // in Germany
  to: string = 'Graz'; // in Austria
  urgent: boolean = false;

  flights$: Observable<Flight[]>;

  get flights() {
    return this.flightService.flights;
  }

  // "shopping basket" with selected flights
  basket: object = {
    "3": true,
    "5": true
  };

  constructor(
    private store: Store<FlightBookingStateRef>,
    private flightService: FlightService) {
  }

  ngOnInit() {
    this.flights$ = this.store.select(getFlights);
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService
      .find(this.from, this.to, this.urgent)
      .subscribe(flights => {
        this.store.dispatch(new FlightsLoaded({ flights }));
      }, err => {
        console.error('Error loading flights', err);
      });
  }

  delay(): void {
    this.flights$.pipe(take(1)).subscribe(flights => {
      let flight = flights[0];

      let oldDate = new Date(flight.date);
      let newDate = new Date(oldDate.getTime() + 15 * 60 * 1000);
      let newFlight = { ...flight, date: newDate.toISOString() };

      this.store.dispatch(new FlightUpdated({ flight: newFlight }));
    });
  }
}
