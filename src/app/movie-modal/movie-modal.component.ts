import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent implements OnInit {

  @Input() movie;

  constructor(private modalController: ModalController) { }

  ngOnInit() {    
  }

  back(){
    this.modalController.dismiss();
  }

}
