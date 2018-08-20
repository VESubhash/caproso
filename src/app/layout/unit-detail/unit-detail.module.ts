import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { UnitDetailComponent } from './unit-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitDetailRoutingModule } from './unit-detail-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        UnitDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule
    ],
    declarations: [UnitDetailComponent]

})
export class UnitDetailModule {}
