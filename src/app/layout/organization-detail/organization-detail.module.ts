import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { OrganizationDetailComponent } from './organization-detail.component';
import { OrganizationDetailRoutingModule } from './organization-detail-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        OrganizationDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule

    ],
    declarations: [OrganizationDetailComponent

    ]
})
export class OrganizationDetailModule {}



