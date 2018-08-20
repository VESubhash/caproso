import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ManageAffiliatesRoutingModule } from './manage-affiliates-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageAffiliatesComponent } from './manage-affiliates.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageAffiliatesRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageAffiliatesComponent]

})
export class ManageAffiliatesModule {}
