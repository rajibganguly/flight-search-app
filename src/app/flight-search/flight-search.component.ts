import { Component, OnInit } from '@angular/core';
import { AirportService } from '../airport.service';


@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit {
  flightType: string = 'one-way';
  origin: string = '';
  destination: string = '';
  airports: any[] = [];

  constructor(private airportService: AirportService) { }

  ngOnInit(): void {
    this.airportService.getAirports().subscribe((data: any) => {
      this.airports = data.airports;
    });
  }

  search() {
    // Perform search with selected criteria
    console.log('Flight Type:', this.flightType);
    console.log('Origin:', this.origin);
    console.log('Destination:', this.destination);
  }
}
