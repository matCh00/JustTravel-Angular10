import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fragments = [
    {frag: 'hero', icon: 'pi-hashtag'},
    {frag: 'explore', icon: 'pi-map-marker'},
    {frag: 'travel', icon: 'pi-map'},
  ]

}
