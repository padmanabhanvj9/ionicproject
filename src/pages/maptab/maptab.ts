import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MaptabPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */



declare var google:any;

@IonicPage()
@Component({
  selector: 'page-maptab',
  templateUrl: 'maptab.html',
})
export class MaptabPage {
  
  @ViewChild('map') mapRef:ElementRef;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log(this.mapRef);
    this.showMap();
  }

  public lat:any="12.9532";
  public lng:any="80.1416";
  image:any;
  showMap(){
    //Location - lat long
    const location = new google.maps.LatLng(this.lat,this.lng);

    //Map Options
    const options = {
      center:location,
      zoom:15,
      //disabling the street view
      streetViewControl:false,
      //map types-roadMap,satellite,terrain
      mapTypeId:'terrain'
    }

    const map = new google.maps.Map(this.mapRef.nativeElement,options);

    //automatically change the map type id with time out settings
    setTimeout(()=>map.setMapTypeId('satellite'),10000);

    //resize the image to 24x24
    // var image = {
    //   url: 'assets/img/marker.png', // image is 512 x 512
    //   scaledSize: new google.maps.Size(24, 24),
    // };
    this.addMarker(location,map);
  }
  //adding image to marker
  // addMarker(position,map,image){
  //   return new google.maps.Marker({
  //     position,map,icon:image
  //   })
  // }

  addMarker(position,map){
    return new google.maps.Marker({
      position,map
    })
  }
}
