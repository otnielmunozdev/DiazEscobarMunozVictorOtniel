import { Component } from '@angular/core';
import { User } from '../classes/user.class';
import { Router } from '@angular/router';
import { NotificationsService } from '../services/notifications.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loginInfo: User = new User();

  constructor(private router: Router,
    private notificationService: NotificationsService) { }

  ngOnInit(): void {
  }

  validar() {
    if (this.loginInfo.username && this.loginInfo.password) {
      this.obtenerInfo();
    } else {
      this.createNotification('Ingresa tu usuario y contraseña');
    }
  }

  obtenerInfo() {
    let infoLocalStorage = JSON.parse(localStorage.getItem('InfoSessions'));
    console.log(infoLocalStorage);

    if (infoLocalStorage) {
      let userFound = infoLocalStorage.find((info) => {
        return info.username == this.loginInfo.username
          && info.password == this.loginInfo.password
      });
      console.log(userFound);

      if (userFound) {
        this.router.navigate(['dashboard']).then(() => {
          this.createNotification('Bienvenido' + this.loginInfo.username);
        });
      } else {
        this.createNotification('No se encontro información del usuario');
      }
    } else {
      this.createNotification('No se encontro información del usuario');

    }

  }

  goRegister() {
    this.router.navigate(['register']);
  }

  createNotification(textMessage) {
    this.notificationService.createNotification(textMessage);
  }

}
