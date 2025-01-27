import {AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements AfterViewInit {

  @Input() fragments: {frag: string, icon: string}[] = [];

  @Input() position: 'topRight' | 'bottomCenter' = 'topRight';


  @ViewChild('navContainer') navContainer: ElementRef;


  constructor(private renderer: Renderer2) {}


  ngAfterViewInit(): void {
    const containerHeight = this.navContainer.nativeElement.offsetHeight;
    this.renderer.setStyle(
      this.navContainer.nativeElement,
      'margin-top',
      `-${containerHeight}px`
    );
  }


  scrollTo(index: number): void {
    const offset = index === 1 ? 890 : index === 2 ? 2250 : 0;
    window.scrollTo({
      top: offset,
      behavior: 'smooth'
    });
  }

}
