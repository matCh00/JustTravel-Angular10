import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Location} from "../../../shared/models/location.model";

@Component({
  selector: 'app-map-travels',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() locations: Location[] = [];
  @Output() locationsChange = new EventEmitter<Location[]>();

}
