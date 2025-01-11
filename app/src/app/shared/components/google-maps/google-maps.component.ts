import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter,
  Input,
  NgZone,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {GoogleMap} from "@angular/google-maps";
import {Location} from "../../models/location.model";


@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements AfterViewInit, OnChanges {

  @Input() locations: Location[] = [];
  @Output() locationsChange = new EventEmitter<Location[]>();

  @ViewChild('map', {static: false}) map!: GoogleMap;
  @ViewChild('searchBox', {static: false}) searchBox!: ElementRef<HTMLInputElement>;

  center = {lat: 52.2297, lng: 21.0122};
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoom: 12,
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    streetViewControl: true,
    fullscreenControl: true,
    zoomControl: true,
  };

  directions: google.maps.DirectionsResult | null = null;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer: google.maps.DirectionsRenderer | undefined;

  shareUrl: string = '';


  constructor(private ngZone: NgZone) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['locations']) {
      this.updateRoute();
    }
  }


  ngAfterViewInit(): void {
    this.initAutocomplete();
  }


  initAutocomplete(): void {
    const input = this.searchBox.nativeElement;
    const autocomplete = new google.maps.places.Autocomplete(input, {
      fields: ['geometry', 'name'],
    });

    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = autocomplete.getPlace();

        if (place.geometry && place.geometry.location) {
          const location = {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            title: place.name,
          };
          this.locations.push(location);
          this.updateRoute();
          this.center = {lat: location.lat, lng: location.lng};
        }
      });
    });
  }


  addPoint(event: google.maps.MapMouseEvent | google.maps.IconMouseEvent) {
    if (event.latLng) {
      const location = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        title: '',
      };
      this.locations.push(location);

      this.getAddress(location.lat, location.lng).then((address) => {
        location.title = address || 'Unknown Location';
      });
      this.updateRoute();
    }
  }


  removePoint(index: number) {
    this.locations.splice(index, 1);
    this.updateRoute();
  }


  updateRoute() {
    if (this.locations?.length < 2) {
      this.directionsRenderer?.setDirections({geocoded_waypoints: [], routes: []});
      this.directions = null;
      this.updateShareUrl();
      return;
    }

    if (!this.directionsRenderer && this.map?.googleMap) {
      this.directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        preserveViewport: true,
      });
      this.directionsRenderer.setMap(this.map.googleMap);
    }

    const waypoints = this.locations?.slice(1, -1).map((location) => ({
      location: new google.maps.LatLng(location.lat, location.lng),
      stopover: true,
    }));

    const request: google.maps.DirectionsRequest = {
      origin: this.locations?.[0] ?? '',
      destination: this.locations?.[this.locations?.length - 1],
      waypoints,
      travelMode: google.maps.TravelMode.WALKING,
    };

    this.directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK && this.directionsRenderer) {
        this.directionsRenderer.setDirections(result);
        this.directions = result;
        this.updateShareUrl();
      } else {
        console.error('Directions request failed due to:', status);
      }
    });
  }


  updateShareUrl() {
    const baseUrl = 'https://www.google.com/maps/dir/';
    const path = this.locations
      .map((loc) => `${loc.lat},${loc.lng}`)
      .join('/');
    this.shareUrl = `${baseUrl}${path}`;
  }


  exportMap() {
    if (this.locations?.length < 2) {
      return;
    }
    this.updateShareUrl();
    const link = document.createElement('a');
    link.href = `data:text/plain;charset=utf-8,${encodeURIComponent(this.shareUrl)}`;
    link.download = 'directions.maps.app.goo.gl';
    link.click();
  }


  private async getAddress(lat: number, lng: number): Promise<string | null> {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve) => {
      geocoder.geocode({location: {lat, lng}}, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results[0]) {
          resolve(results[0].formatted_address);
        } else {
          resolve(null);
        }
      });
    });
  }


  onDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData('index', index.toString());
  }


  onDrop(event: DragEvent, index: number) {
    const draggedIndex = parseInt(event.dataTransfer?.getData('index') || '0', 10);
    const [draggedItem] = this.locations.splice(draggedIndex, 1);
    this.locations.splice(index, 0, draggedItem);
    this.updateRoute();
  }


  onDragOver(event: DragEvent) {
    event.preventDefault();
  }


  async processUrl(url: string) {
    try {
      const segments = url.split('/');
      const dirIndex = segments.indexOf('dir');
      const filteredSegments = dirIndex >= 0 ? segments.slice(dirIndex + 1) : [];

      const locations = await Promise.all(
        filteredSegments.map(async (segment) => {
          const coordinateMatch = segment.match(/^(-?\d+(\.\d+)?),(-?\d+(\.\d+)?)/);
          if (coordinateMatch) {
            const lat = parseFloat(coordinateMatch[1]);
            const lng = parseFloat(coordinateMatch[3]);
            const title = await this.getAddress(lat, lng);
            return {lat, lng, title: title || 'Unnamed Location'};
          } else {
            return {lat: null, lng: null, title: decodeURIComponent(segment.replace(/\+/g, ' '))};
          }
        })
      );

      this.locations = locations.filter((location) => location.lat !== null && location.lng !== null);

      this.updateRoute();

      if (this.locations?.length > 0) {
        this.center = {lat: this.locations[0].lat, lng: this.locations[0].lng};
      }
    } catch (error) {
      console.error('Error processing URL:', error);
    }
  }

}
