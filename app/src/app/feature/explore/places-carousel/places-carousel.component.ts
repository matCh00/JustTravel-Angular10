import {Component, OnDestroy, OnInit} from '@angular/core';
import {Place} from "../../../shared/models/place.model";
import {ApiService} from "../../../shared/services/api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-places-carousel',
  templateUrl: './places-carousel.component.html',
  styleUrls: ['./places-carousel.component.scss']
})
export class PlacesCarouselComponent implements OnInit, OnDestroy {

  places: Place[] = [];
  loading: boolean = false;
  error: boolean = false;

  constructor(
    private apiService: ApiService,
  ) {}

  private sub: Subscription;


  ngOnInit(): void {
    this.loading = true;

    this.sub = this.apiService.getPlaces().subscribe({
      next: places => {
        this.places = places;
        this.loading = false;
      },
      error: error => {
        this.loading = false;
        this.error = true;
      },
    })
  }

  ngOnDestroy() {
    if (this.sub)
      this.sub.unsubscribe();
  }

}
