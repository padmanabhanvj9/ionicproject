import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionViewPage } from './option-view';

@NgModule({
  declarations: [
    OptionViewPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionViewPage),
  ],
})
export class OptionViewPageModule {}
