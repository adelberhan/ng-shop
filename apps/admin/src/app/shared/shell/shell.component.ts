import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'admin-shell',
  templateUrl: './shell.component.html',
})
export class ShellComponent implements OnInit {
  getScreenWidth: any;
  ngOnInit(): void {
    this.onWindowResize();
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
