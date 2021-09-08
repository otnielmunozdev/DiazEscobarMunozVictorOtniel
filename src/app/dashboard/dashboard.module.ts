import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { NotificationsService } from '../services/notifications.service';
import { MovieService } from '../services/movie.service';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { MovieModalPageModule } from '../movie-modal/movie-modal.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    MovieModalPageModule
  ],
  declarations: [DashboardComponent],
  providers:[LocalNotifications,NotificationsService, MovieService],
  entryComponents:[MovieModalComponent]
})
export class DashboardPageModule {}
