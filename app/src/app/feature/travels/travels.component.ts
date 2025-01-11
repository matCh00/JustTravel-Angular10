import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApiService} from "../../shared/services/api.service";
import {Location} from "../../shared/models/location.model";
import {Trip} from "../../shared/models/trip.model";

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.scss']
})
export class TravelsComponent {

  @Input() locations: Location[] = [];
  @Output() locationsChange = new EventEmitter<Location[]>();

  dialogVisible: boolean = false;

  constructor(
    private apiService: ApiService,
  ) {}


  createTrip() {
    this.dialogVisible = true;
  }


  handleSubmit(form: Omit<Trip, "id" | "waypoints">) {
    const trip: Omit<Trip, "id"> = {
      ...form,
      waypoints: this.locations
    }
    this.apiService.addTrip(trip).subscribe(() => {
      this.dialogVisible = false;
    });
  }


  handleCancel() {
    this.dialogVisible = false;
  }

  handleDelete(id: string) {
    this.apiService.deleteTrip(id).subscribe()
  }

}
