import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ManageUserRoutingModule } from './manage-users-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageUserComponent } from './manage-user.component';
import { FormsModule } from '@angular/forms';





@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageUserRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageUserComponent]

})
export class ManageUserModule {}
