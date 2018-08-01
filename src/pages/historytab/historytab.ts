import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HistorytabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historytab',
  templateUrl: 'historytab.html',
})
export class HistorytabPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public pastHistory=[
    {date:"21 Jan",reason:"General Health Checkup",time:"11:00 AM"},
    {date:"9 Feb",reason:"Head Ache",time:"12:00 PM"},
    {date:"21 Mar",reason:"Nausiea",time:"04:00 PM"},
    {date:"8 Jul",reason:"Stomach Pain",time:"09:00 AM"},
    {date:"1 Aug",reason:"Consultation",time:"05:00 PM"},
    {date:"21 Jan",reason:"General Health Checkup",time:"11:00 AM"},
    {date:"9 Feb",reason:"Head Ache",time:"12:00 PM"},
    {date:"21 Mar",reason:"Nausiea",time:"04:00 PM"},
    {date:"8 Jul",reason:"Stomach Pain",time:"09:00 AM"}
  ]
  ionViewDidLoad() {
    console.log('ionViewDidLoad HistorytabPage');
  }

}
