import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsPage {

  public message;

  constructor(public navCtrl: NavController) {
    this.message="Prueba";
  }

  presentClick() {
    this.message="Estamos en contacto";
  }

  discussionClick() {
    this.message="En 10 minutos, si no recibimos respuesta, mandamos una patrulla";
  }

  dangerClick() {
    this.message="Una patrulla va hacia el domicilio/lugar"
  }

}
