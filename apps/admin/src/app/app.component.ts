import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'admin-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.themeService.switchTheme('viva-dark');
  }
  // changeTheme() {
  //   this.themeService.switchTheme('arya-orange');
  // }
  title = 'admin';
}
