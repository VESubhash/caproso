import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageGroupsComponent } from './manage-groups.component';
import { ManageGroupsRoutingModule } from './manage-groups-routing.module';






@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageGroupsRoutingModule,
        StatModule,
        DataTablesModule
    ],
    declarations: [ManageGroupsComponent]

})
export class ManageGroupsModule {}
