import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ManageOrganizationsRoutingModule } from './manage-organizations-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageOrganizationsComponent } from './manage-organizations.component';
import { FormsModule } from '@angular/forms';





@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageOrganizationsRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageOrganizationsComponent]

})
export class ManageOrganizationsModule {}
