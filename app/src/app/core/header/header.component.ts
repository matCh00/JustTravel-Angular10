import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidebar = new EventEmitter<boolean>();


  planes = [
    {src: 'assets/plane1.png'},
    {src: 'assets/plane2.png'},
    {src: 'assets/plane3.png'},
    {src: 'assets/plane4.png'},
    {src: 'assets/plane5.png'}
  ];
  selectedPlane: number | null = null;


  isAnimating = false;

  triggerPlaneAnimation() {
    if (this.isAnimating)
      return;

    this.selectedPlane = Math.floor(Math.random() * this.planes.length);

    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
      this.selectedPlane = null;
    }, 6000);
  }

}
