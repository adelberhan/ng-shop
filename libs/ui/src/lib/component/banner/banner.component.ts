import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-banner',
  templateUrl: './banner.component.html',
  styles: [],
})
export class BannerComponent {
  constructor(private route:Router){}
  public getScreenWidth: any;
  public getScreenHeight: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;

  }

  seeMore(){
this.route.navigate(['/products'])
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;

  }
}
