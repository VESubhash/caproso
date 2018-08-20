import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ManageClientsRoutingModule } from './manage-clients-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageClientsComponent } from './manage-clients.component';
import { FormsModule } from '@angular/forms';






@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageClientsRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageClientsComponent]

})
export class ManageClientsModule {}
