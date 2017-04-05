import { Component, OnInit} from '@angular/core';
import {AlertController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { SimpleTimer } from 'ng2-simple-timer';
@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})
export class ButtonsPage implements OnInit {

  public message;
  public min;
  public secs;
  counter0 = 180;
	timer0Id: string;
  sec="00";
  //public inter;
  //public t;
  constructor(public navCtrl: NavController, private alertController: AlertController, private st: SimpleTimer) {
    this.message="";
    this.min=3;
    this.secs=0;
    //document.getElementById('timer').innerHTML = 0o3 + ":" + 0o0;
    //this.startTimer();
    //clearInterval(this.inter);
  }

	ngOnInit() {
		this.st.newTimer('1sec',1);
		
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
        alert('timer completed');
      }
		  
	  }
    /*startTimer(){
      var presentTime=document.getElementById('timer').innerHTML;
      var timeArray = time.split(/[:]+/);
      var m=parseInt(timeArray[0]);
      var s = this.checkSecond(parseInt(timeArray[1]) - 1);
      if (s == 59) {
        m = m - 1;
      }
      //if(m<0){alert('timer completed')}
      
      document.getElementById('timer').innerHTML = m + ':' + s;
      setTimeout(this.startTimer,1000);
    }*/
  helpOperator() {
    let alert = this.alertController.create({
                  title: "Asistente telefónico",
                  subTitle: "Si necesita ayuda, nuestros asistentes están dispuestos para usted las 24h",
                  buttons: ["Cancelar","Contactar"]
                });
                alert.present();

  }

}
