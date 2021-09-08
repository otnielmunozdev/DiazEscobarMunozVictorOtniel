import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RegisterPageRoutingModule } from './register-routing.module';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { RegisterService } from '../services/register.service';
import { NotificationsService } from '../services/notifications.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule
  ],
  declarations: [RegisterComponent],
  providers:[LocalNotifications, RegisterService,NotificationsService]
})
export class RegisterPageModule {}
