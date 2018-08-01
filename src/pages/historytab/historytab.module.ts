import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistorytabPage } from './historytab';

@NgModule({
  declarations: [
    HistorytabPage,
  ],
  imports: [
    IonicPageModule.forChild(HistorytabPage),
  ],
})
export class HistorytabPageModule {}
