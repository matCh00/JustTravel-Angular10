import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "../../shared/models/location.model";
import {Trip} from "../../shared/models/trip.model";
import {TripService} from "../../shared/services/trip.service";

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent implements OnInit {

  locations: Location[] = [];

  dialogVisible: boolean = false;


  constructor(
    private tripService: TripService,
  ) {}


  ngOnInit() {
    this.tripService.fetchTrips();
  }


  handleSubmit(form: Omit<Trip, "id" | "waypoints">) {
    const trip: Omit<Trip, "id"> = {
      ...form,
      waypoints: this.locations
    }
    this.tripService.addTrip(trip).subscribe(() => {
      this.dialogVisible = false;
    });
  }


  openDialog() {
    this.dialogVisible = true;
  }

  closeDialog() {
    this.dialogVisible = false;
  }

}
