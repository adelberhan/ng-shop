import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../theme.service';

@Component({
  selector: 'ng-shop-switch-theme-icon',
  templateUrl: './switch-theme-icon.component.html',
  styleUrls: ['./switch-theme-icon.component.css'],
})
export class SwitchThemeIconComponent {
  private currentTheme: string;
  sun = 'pi pi-sun';
  checked!: boolean;
  lightMode = '../../../../assets/imgs/day-mode.png';

  constructor(private themeService: ThemeService) {
    this.currentTheme = 'viva-dark';
  }

  changeTheme() {
    this.checked
      ? this.themeService.switchTheme('viva-dark')
      : this.themeService.switchTheme('lara-light-blue');
    this.checked = !this.checked;
    // this.themeService.switchTheme('bootstrap4-light-purple');
  }
}
