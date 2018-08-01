import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistorytabPage } from '../historytab/historytab';
import { MaptabPage } from '../maptab/maptab';

/**
 * Generated class for the PatientdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patientdetails',
  templateUrl: 'patientdetails.html',
})
export class PatientdetailsPage {
  public history;
  public map;
  public pname = "Padmanabhan";
  public email = "padmanabhanvj9@gmail.com";
  public mobile = "8220772736";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.history = HistorytabPage;
   this.map = MaptabPage;
   console.log(navParams.get('val'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientdetailsPage');
  }

}
