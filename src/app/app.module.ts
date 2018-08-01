import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TodayAppointmentPage } from '../pages/today-appointment/today-appointment';
//Patient Details Components
import { PatientdetailsPage } from '../pages/patientdetails/patientdetails';
import { HistorytabPage } from '../pages/historytab/historytab';
import { MaptabPage } from '../pages/maptab/maptab';

//Options Components
import { AdditionoptionsPage } from '../pages/additionoptions/additionoptions';
import { OptionNotificationPage } from '../pages/option-notification/option-notification';
import { OptionNotifyrulePage } from '../pages/option-notifyrule/option-notifyrule';
import { OptionStatisticsPage } from '../pages/option-statistics/option-statistics';
import { OptionSchedulePage } from '../pages/option-schedule/option-schedule';
import { OptionViewPage } from '../pages/option-view/option-view';
import { OptionSettingsPage } from '../pages/option-settings/option-settings';


import { IonTextAvatar } from 'ionic-text-avatar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { KeysPipe } from '../pages/customentriespipe';
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TodayAppointmentPage,
    PatientdetailsPage,
    AdditionoptionsPage,
    HistorytabPage,
    MaptabPage,
    OptionNotificationPage,
    OptionNotifyrulePage,
    OptionStatisticsPage,
    OptionSchedulePage,
    OptionViewPage,
    OptionSettingsPage,
    IonTextAvatar,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TodayAppointmentPage,
    AdditionoptionsPage,
    PatientdetailsPage,
    HistorytabPage,
    MaptabPage,
    OptionNotificationPage,
    OptionNotifyrulePage,
    OptionStatisticsPage,
    OptionSchedulePage,
    OptionViewPage,
    OptionSettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
