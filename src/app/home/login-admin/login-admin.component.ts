import { Component } from '@angular/core';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

  public showPassword: boolean = false;
  public modalShowDog: boolean = false;


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  openModalShowDog() {
    this.modalShowDog = true;
  }

  closeModalShowDog() {
    this.modalShowDog = false;
  }


  protected readonly close = close;
}
