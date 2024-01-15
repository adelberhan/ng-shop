import { Component, HostListener, OnInit } from '@angular/core';
import { UsersService } from '../../../../../../libs/users/src/lib/services/user.service';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }

  getScreenWidth: any;
  sidebarVisible: boolean = false;

  constructor(
    private usersService: UsersService,
    private themeService: ThemeService
  ) {}
  ngOnInit(): void {
    this.onWindowResize();
  }
  logOut() {
    this.usersService.logOut();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
