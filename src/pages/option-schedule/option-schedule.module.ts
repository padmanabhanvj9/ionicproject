import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionSchedulePage } from './option-schedule';

@NgModule({
  declarations: [
    OptionSchedulePage,
  ],
  imports: [
    IonicPageModule.forChild(OptionSchedulePage),
  ],
})
export class OptionSchedulePageModule {}
