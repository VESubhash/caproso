import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import {ManageItemRoutingModule} from './manage-item-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageItemComponent } from './manage-item.component';
import { FormsModule } from '@angular/forms';





@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageItemRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageItemComponent]

})
export class ManageItemModule {}
