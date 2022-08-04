import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerContainerClass: string = 'header-container';
  menuClass: string = 'header-menu-container';
  iconContainerClass: string = 'header-Menuicon-container';
  menuIsOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  handleMenuIcon() {
    this.menuClass = ' header-menu-container header-menu-container-resbonseve';
    this.headerContainerClass = 'header-container header-container-resbonseve';
    this.iconContainerClass =
      'header-Menuicon-container header-Menuicon-container-open';
  }

  handleMenuClick() {
   this.headerContainerClass='header-container';
    this.menuClass = 'header-menu-container';
    this.iconContainerClass = 'header-Menuicon-container';
  }
}
