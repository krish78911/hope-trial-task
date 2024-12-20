import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResultsPage } from './results.page';

import { ResultsPageRoutingModule } from './results-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ResultsPageRoutingModule
  ],
  declarations: [ResultsPage]
})
export class ResultsPageModule {}
