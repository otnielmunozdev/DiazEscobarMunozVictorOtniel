import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ModalController } from '@ionic/angular';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';
import { Router } from '@angular/router';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  arrayMovies: [] = [];

  constructor(private movieService: MovieService,
    private modalController: ModalController,
    private router: Router,
    private notificationService: NotificationsService ) { }

  ngOnInit() {
    this.search('drama');
  }

  search(genre) {
    this.movieService.getinfoMovie(genre).then((infoMovies) => {
      this.arrayMovies = infoMovies;
    }).catch((error)=>{
      console.error("error al obtener info de peliculas", error);
      this.createNotification('Error al obtener peliculas');
    });
  }


  async openModalInfoMovie(movie) {
    const modal = await this.modalController.create({
      component: MovieModalComponent,
      componentProps: { movie: movie }
    });
    return await modal.present();
  }

  logout() {
    this.router.navigate(['home']);
  }

  createNotification(textMessage) {
    this.notificationService.createNotification(textMessage);
  }

}
