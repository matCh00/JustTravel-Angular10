import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() delete = new EventEmitter<string>();

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.trips$ = this.apiService.getTrips();
  }

}
