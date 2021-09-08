import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { MovieModalComponent } from '../movie-modal/movie-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [MovieModalComponent],
  providers:[],
  entryComponents:[MovieModalComponent],
  exports:[MovieModalComponent]
})
export class MovieModalPageModule {}
