import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodayAppointmentPage } from '../today-appointment/today-appointment';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {}
  
  load(){
    this.navCtrl.push(TodayAppointmentPage,{
      val:'Padmanabhan'
    });
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad HomePage");
  }
}
