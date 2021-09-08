import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user.class';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { RegisterService } from '../services/register.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerInfo: User = new User();

  constructor(private navController: NavController,
              private registerService: RegisterService,
              private notificationService: NotificationsService
  ) { }

  ngOnInit() {
    this.registerService.getInfoUser().then((info) => {
      this.registerInfo.name = info[0].name.first + ' ' + info[0].name.last;
      this.registerInfo.username = info[0].login.username;
      this.registerInfo.password = info[0].login.password;
      this.registerInfo.dateRegistered = info[0].registered.date;
    })
    .catch((error)=>{
      console.error('error al obtener info: ', error);
      this.createNotification('Error al obtener información del servicio');
      
    });
  }



  validar() {
    if (this.registerInfo.username && this.registerInfo.password &&
      this.registerInfo.name) {
      let infoLocalStorage = JSON.parse(localStorage.getItem('InfoSessions'));
      if (infoLocalStorage) {
        let userFound = infoLocalStorage.find((info) => info.username == this.registerInfo.username);
        if (userFound) {
          this.createNotification('El usuario ya existe, elige otro');
        } else {
          this.guardarInfo();
        }
      } else {
        this.guardarInfo();
      }
    } else {
      this.createNotification('Verifica que todos los campos esten completos');
    }
  }

  back() {
    this.navController.pop();
  }

  guardarInfo() {
    let arraySesiones = [];
    let infoLocalStorage = localStorage.getItem('InfoSessions');

    if (!infoLocalStorage) {
      arraySesiones.push(this.registerInfo)
      localStorage.setItem('InfoSessions', JSON.stringify(arraySesiones));
      this.createNotification('Usuario creado correctamente');
      this.navController.pop();

    } else {
      let sessions = JSON.parse(infoLocalStorage);
      sessions.push(this.registerInfo);
      localStorage.setItem('InfoSessions', JSON.stringify(sessions));
      this.createNotification('Usuario creado correctamente');
      this.navController.pop();
    }

  }

  createNotification(textMessage) {
   this.notificationService.createNotification(textMessage);
  }

}
