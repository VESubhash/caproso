import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageUnitsComponent } from './manage-units.component';
import { ManageUnitsRoutingModule} from './manage-units-routing.module';
import { FormsModule } from '@angular/forms';







@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageUnitsRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageUnitsComponent]

})
export class ManageUnitsModule {}
