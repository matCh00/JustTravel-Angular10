import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  sidebarVisible: boolean = false;

  ngOnInit(): void {
    window.addEventListener('resize', this.updateContentHeight);
    window.addEventListener('load', this.updateContentHeight);
  }

  private updateContentHeight() {
    const headerHeight = document.getElementById('header')?.offsetHeight;
    const footerHeight = document.getElementById('footer')?.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    document.documentElement.style.setProperty('--footer-height', `${footerHeight}px`);
  }

}
