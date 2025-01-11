import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Trip} from "../../shared/models/trip.model";
import {Observable} from "rxjs";
import {ApiService} from "../../shared/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class TravelResolver implements Resolve<Trip> {

  constructor(
    private apiService: ApiService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Trip> {
    const travelId: string = route.paramMap.get('travelId')!;
    return this.apiService.getTrip(travelId);
  }
}
