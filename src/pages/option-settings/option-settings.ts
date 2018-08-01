import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OptionSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-option-settings',
  templateUrl: 'option-settings.html',
})
export class OptionSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public DotorEdit:any={
    "Business Hour Start":"10:00",
    "Business Hour End":"23:00",
    "Break Time Start":"13:00",
    "Break Time End":"14:00",
    "Avg Wait Time":"5"
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionSettingsPage');
  }

}
