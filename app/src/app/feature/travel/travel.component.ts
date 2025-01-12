import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../../shared/models/trip.model";
import {map, switchMap, take, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";
import {Location} from "../../shared/models/location.model";
import {TripService} from "../../shared/services/trip.service";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit, AfterViewInit {

  trip$: Observable<Trip>;
  locations: Location[] = [];

  editMode: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private tripService: TripService,
    private router: Router,
  ) {}


  @ViewChild('f', {static: false}) tripDetailsForm!: NgForm;


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.editMode = queryParams['edit'] === 'true';
      if (!this.editMode) {
        setTimeout(() => {
          this.tripDetailsForm.form.disable();
        })
      }
    });
  }


  ngAfterViewInit() {
    this.trip$ = this.activatedRoute.paramMap.pipe(
      map(() => this.activatedRoute.snapshot?.data['trip']),

      tap(trip => {
        setTimeout(() => {
          this.tripDetailsForm?.form.setValue({
            name: trip.name,
            location: trip.location,
            startDate: new Date(trip.startDate),
            endDate: new Date(trip.endDate),
          })

          this.locations = trip.waypoints;
        })
      })
    )
    this.trip$.subscribe();
  }


  onSubmit() {
    this.trip$.pipe(
      take(1),
      switchMap((t: Trip) => {
        const trip: Trip = {
          ...this.tripDetailsForm.form.getRawValue(),
          id: t.id,
          waypoints: this.locations
        }
        return this.tripService.editTrip(trip)
      })
    ).subscribe(() => {
      this.router.navigate(['/travels']);
    });
  }

}
