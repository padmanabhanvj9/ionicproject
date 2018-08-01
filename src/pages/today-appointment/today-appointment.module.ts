import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodayAppointmentPage } from './today-appointment';

@NgModule({
  declarations: [
    TodayAppointmentPage,
  ],
  imports: [
    IonicPageModule.forChild(TodayAppointmentPage),
  ],
})
export class TodayAppointmentPageModule {}
