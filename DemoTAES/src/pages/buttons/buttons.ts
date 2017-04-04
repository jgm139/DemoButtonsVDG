import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsPage {

  public message;
  //public inter;
  //public t;
  constructor(public navCtrl: NavController, private alertController: AlertController) {
    this.message="";
    //document.getElementById('timer').innerHTML = 0o3 + ":" + 0o0;
    //this.startTimer();
    //clearInterval(this.inter);
  }

  presentClick() {
    this.message="Estamos en contacto";
    this.alertPop("Informa", this.message, "OK"); 
  }

  discussionClick() {
    this.message="En 10 minutos, si no recibimos respuesta, mandamos una patrulla";
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
  /*clear(){
        clearInterval(this.inter);
  }
  timeout(){
        this.clear();
        setTimeout(function(){
            document.getElementById("testdiv").innerHTML="Pasaron 2 segundos antes de que vieras esto.";
        },2000,"JavaScript");
  }
  interval(){
        this.t=1;
        this.inter=setInterval(function(){
            this.t++;
            document.getElementById("testdiv").innerHTML=this.t;
        },1000,"JavaScript");
    }*/

    checkSecond(sec) {
      if (sec < 10 && sec >= 0) {
        sec = "0" + sec;
      }; // add zero in front of numbers < 10
      if (sec < 0) {
        sec = "59";
      };
      return sec;
    }

    startTimer() {
      var presentTime = document.getElementById('timer').innerHTML;
      var timeArray = presentTime.split(/[:]+/);
      var m = parseInt(timeArray[0]);
      var s = this.checkSecond((parseInt(timeArray[1]) - 1));
      if (s == 59) {
        m = m - 1;
      }
      //if(m<0){alert('timer completed')}

      document.getElementById('timer').innerHTML = m + ":" + s;
      setTimeout(this.startTimer, 1000);
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
