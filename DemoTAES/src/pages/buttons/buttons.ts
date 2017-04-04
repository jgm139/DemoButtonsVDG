import { Component } from '@angular/core';
import {AlertController} from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsPage {

  public message;
  public inter;
  public t;
  constructor(public navCtrl: NavController, private alertController: AlertController) {
    this.message="";
    clearInterval(this.inter);
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
  clear(){
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
