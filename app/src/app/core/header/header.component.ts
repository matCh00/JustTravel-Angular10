import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidebar = new EventEmitter<boolean>();


  isAnimating = false;

  triggerPlaneAnimation() {
    if (this.isAnimating)
      return;
    this.isAnimating = true;
    setTimeout(() => {
      this.isAnimating = false;
    }, 6000);
  }

}
