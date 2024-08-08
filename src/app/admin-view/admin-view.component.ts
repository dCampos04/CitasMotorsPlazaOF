import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AdminSidemenuComponent} from "./admin-sidemenu/admin-sidemenu.component";

@Component({
  selector: 'app-admin-view',
  standalone: true,
  imports: [
    RouterOutlet,
    AdminSidemenuComponent
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {

  public toggleSideBar : boolean = true;


  changeToggleSideMenu() {
    this.toggleSideBar = !this.toggleSideBar;
  }

}
