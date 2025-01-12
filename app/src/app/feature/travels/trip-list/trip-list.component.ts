import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../../../shared/models/trip.model";
import {TripService} from "../../../shared/services/trip.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  constructor(
    private tripService: TripService,
  ) {}


  trips$: Observable<Trip[]>;


  ngOnInit(): void {
    this.trips$ = this.tripService.trips;
  }


  deleteTrip(id: string) {
    this.tripService.deleteTrip(id).subscribe()
  }

}
