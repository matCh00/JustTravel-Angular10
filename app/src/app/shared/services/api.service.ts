import {Injectable} from '@angular/core';
import {Place} from "../models/place.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getPlaces(): Observable<Place[]> {
    return this.httpClient.get<{places: Place[]}>('http://localhost:3000/places').pipe(
      map((res: {places: Place[]}) => res.places)
    )
  }

}
