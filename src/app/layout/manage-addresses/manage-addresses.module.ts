import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageAddressesComponent } from './manage-addresses.component';
import { ManageAddressesRoutingModule } from './manage-addresses-routing.module';
import { FormsModule } from '@angular/forms';






@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageAddressesRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageAddressesComponent]

})
export class ManageAddressesModule {}
