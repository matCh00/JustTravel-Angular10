import {Component} from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-trip-details-form',
  templateUrl: './trip-details-form.component.html',
  styleUrls: ['./trip-details-form.component.scss'],
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class TripDetailsFormComponent {

}
