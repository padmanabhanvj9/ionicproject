import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { KeysPipe } from '../customentriespipe';

/**
 * Generated class for the OptionViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option-view',
  templateUrl: 'option-view.html',
})
export class OptionViewPage {

  public entries:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // Evil response in a variable. Here are all my vehicles.
DoctorDetails = { 
   "Business Id" : "100",
   "First Name": "Dr Merlin",
   "Last Name": "Leoni",
   "Business Type":"MIOT",
   "Main Category":"Ortho",
   "Sub Category":"Nerve",
   "Mobile Number":"8220772736",
   "Business Hour Start":"10:00",
   "Business Hour End":"23:00",
   "Break Time Start":"13:00",
   "Break Time End":"14:00",
   "Avg Wait Time":"10 mins",
   "Business Address":"6/15, Bajanai Kovil Street, Nunagbakkam, chennai",
   "Photo Url":"",
   "Business Rating":"better",
   "Business Group":"lifeline",
   "Business Id Range":"",
   "Business Mode":"single",
   "Business Appointment Type":"token"
  }

  
  ionViewDidLoad() {
   
  }

}