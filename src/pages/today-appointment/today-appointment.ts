import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientdetailsPage } from '../patientdetails/patientdetails';
import { AdditionoptionsPage } from '../additionoptions/additionoptions';

/**
 * Generated class for the TodayAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-today-appointment',
  templateUrl: 'today-appointment.html',
})
export class TodayAppointmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(navParams.get('val'));
  }

  public patientlist =[
    {pname:"Padmanabhan K",email:"padmanabhanvj9@gmail.com",appointmenttype:"token",token:"1",slot:"0"},
    {pname:"Bala K",email:"bala@gmail.com",appointmenttype:"token",token:"2",slot:"0"},
    {pname:"Viji",email:"viji9@gmail.com",appointmenttype:"token",token:"3",slot:"0"},
    {pname:"Padmanabhan K",email:"padmanabhanvj9@gmail.com",appointmenttype:"slot",token:"0",slot:"10:00-10:15"},
  ]

  ionViewDidLoad() {
    console.log('U R Now in TodayAppointmentPage');
  }
  loadpatientdetail(){
    this.navCtrl.push(PatientdetailsPage,{
      val:'Sending values to PatientDetails Page'
    });
  }

  loadfaboptions(){
    this.navCtrl.push(AdditionoptionsPage);
  }
}
