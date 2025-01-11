import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Trip} from "../../shared/models/trip.model";
import {map, switchMap, take, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";
import {ApiService} from "../../shared/services/api.service";

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit, AfterViewInit {

  trip$: Observable<Trip>;

  editMode: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService,
  ) {}


  @ViewChild('f', {static: false}) tripDetailsForm!: NgForm;


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.editMode = queryParams['edit'] === 'true';
      if (!this.editMode) {
        this.tripDetailsForm.form.disable();
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
        })
      })
    )
  }


  onSubmit() {
    this.trip$.pipe(
      switchMap((t: Trip) => {
        const trip: Trip = {
          ...this.tripDetailsForm.form.getRawValue(),
          id: t.id
        }
        return this.apiService.editTrip(trip)
      })
    ).subscribe();
  }


  handleLocationsChange(locations: Location[]) {
    this.trip$.pipe(
      map(t => {
        return {
          ...t,
          waypoints: locations
        }
      })
    )
  }

}
