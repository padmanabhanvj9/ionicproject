import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OptionNotificationPage } from '../option-notification/option-notification';
import { OptionNotifyrulePage } from '../option-notifyrule/option-notifyrule';
import { OptionStatisticsPage } from '../option-statistics/option-statistics';
import { OptionSchedulePage } from '../option-schedule/option-schedule';
import { OptionViewPage } from '../option-view/option-view';
import { OptionSettingsPage } from '../option-settings/option-settings';

/**
 * Generated class for the AdditionoptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additionoptions',
  templateUrl: 'additionoptions.html',
})
export class AdditionoptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionoptionsPage');
  }

  //page for notification
  loadnotificationoption(){
    this.navCtrl.push(OptionNotificationPage);
  }
   //page for notify-rule
   loadnotifyruleoption(){
    this.navCtrl.push(OptionNotifyrulePage);
  }
   //page for stats
   loadstatisticsoption(){
    this.navCtrl.push(OptionStatisticsPage);
  }
   //page for schedule
   loadscheduleoption(){
    this.navCtrl.push(OptionSchedulePage);
  }
    //page for view
    loadviewoption(){
    this.navCtrl.push(OptionViewPage);
  }
    //page for settings
    loadsettingsoption(){
    this.navCtrl.push(OptionSettingsPage);
  }
}
