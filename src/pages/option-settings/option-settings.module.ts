import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionSettingsPage } from './option-settings';

@NgModule({
  declarations: [
    OptionSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionSettingsPage),
  ],
})
export class OptionSettingsPageModule {}
