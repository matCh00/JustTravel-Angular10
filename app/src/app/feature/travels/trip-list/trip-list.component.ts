import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Trip} from "../../../shared/models/trip.model";
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  trips$: Observable<Trip[]>;

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.trips$ = this.apiService.getTrips();
  }

}