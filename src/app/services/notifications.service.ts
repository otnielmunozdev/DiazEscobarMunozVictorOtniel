import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private localNotifications: LocalNotifications,) { }

  createNotification(textMessage) {
    this.localNotifications.schedule({
      text: textMessage,
      trigger: { at: new Date(new Date().getTime() + 3600) },
      led: 'FF0000',
      sound: null
    });
  }

}
