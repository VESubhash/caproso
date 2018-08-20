import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { AffiliateDetailComponent } from './affiliate-detail.component';
import { AffiliateDetailRoutingModule } from './affiliate-detail-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        AffiliateDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule

    ],
    declarations: [AffiliateDetailComponent

    ]
})
export class AffiliateDetailModule {}



