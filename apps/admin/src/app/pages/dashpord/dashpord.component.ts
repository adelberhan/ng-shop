import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashpord',
  templateUrl: './dashpord.component.html',
})
export class DashpordComponent implements OnInit {
  getScreenWidth: any;

  ngOnInit(): void {
    this.onWindowResize();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
