import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaptabPage } from './maptab';

@NgModule({
  declarations: [
    MaptabPage,
  ],
  imports: [
    IonicPageModule.forChild(MaptabPage),
  ],
})
export class MaptabPageModule {}
