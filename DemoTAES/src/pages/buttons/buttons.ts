import { Component, OnInit} from '@angular/core';
import {AlertController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SimpleTimer } from 'ng2-simple-timer';
//import { MapPage } from 'map/map';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})

/*@Component({
  templateUrl: 'map.html'
})*/


export class ButtonsPage implements OnInit {

  public message;
  public min;
  public secs;
  counter0 = 180;
	timer0Id: string;
  sec="00";

  constructor(public navCtrl: NavController, private alertController: AlertController, private st: SimpleTimer) {
    this.message="";
    this.reset();
    //this.goToContact();
  }

  /*goToContact() {
    this.navCtrl.push(MapPage);
  }*/

	ngOnInit() {
		this.st.newTimer('1sec',1);
	}

  reset() {
    this.min=3;
    this.secs=0;
  }

  presentClick() {
    this.stopTimer();
    this.message="Alerta desactivada";
    this.alertPop("Cancelar", this.message, "OK"); 
  }

  discussionClick() {
    this.reset();
    this.startTimer();
    this.message="En 3 minutos, si no recibimos respuesta, mandamos una patrulla";
    this.alertPop("Cuidado", this.message, "OK");
  }

  dangerClick() {
    this.message="Una patrulla va hacia el domicilio/lugar"
    this.alertPop("¡Alerta!", this.message, "OK");
  }

  alertPop(tittleText: string, subtitleText: string, buttonText: string) {
    let alert = this.alertController.create({
                  title: tittleText,
                  subTitle: subtitleText,
                  buttons: [buttonText]
                });
                alert.present();
  }

  checkSecond(sec) {
    var s=""+sec;
    if (sec < 10 && sec >= 0) {
      s = "0" + sec;
    }; // add zero in front of numbers < 10
    if (sec < 0) {
      s = "59";
    };
    return s;
  }

  startTimer() { 
      this.timer0Id = this.st.subscribe('1sec', e => this.timer0callback());
  }
  stopTimer() {
    this.st.unsubscribe(this.timer0Id);
    this.min=3;
    this.sec="00";
  }

  timer0callback() {
    if(this.min!=0 || this.secs!=0){
      this.sec=this.checkSecond(this.secs - 1);
      this.secs=parseInt(this.sec);
      if (this.secs == 59) {
        this.min = this.min - 1;
      }
    }
    else{
      this.st.delTimer('1sec');
      this.st.newTimer('1sec',1);
      this.min=3;
      alert('Patrulla en camino');
      //this.goToContact();
    }
		  
  }

  helpOperator() {
    let alert = this.alertController.create({
                  title: "Asistente telefónico",
                  subTitle: "Si necesita ayuda, nuestros asistentes están dispuestos para usted las 24h",
                  buttons: ["Cancelar","Contactar"]
                });
                alert.present();

  }

}
