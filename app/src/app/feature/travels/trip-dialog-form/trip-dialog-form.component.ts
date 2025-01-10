import {Component, EventEmitter, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Trip} from "../../../shared/models/trip.model";

@Component({
  selector: 'app-trip-dialog-form',
  templateUrl: './trip-dialog-form.component.html',
  styleUrls: ['./trip-dialog-form.component.scss']
})
export class TripDialogFormComponent {

  @Output() submit = new EventEmitter<Omit<Trip, 'id'|'waypoints'>>();
  @Output() cancel = new EventEmitter<void>();

  onSubmit(form: NgForm) {
    this.submit.emit(form.form.value);
    form.reset();
  }

  onClose() {
    this.cancel.emit();
  }

}
