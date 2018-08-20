import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ClientsDetailComponent } from './clients-detail.component';
import { ClientsDetailRoutingModule } from './clients-detail-routing.module';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ClientsDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule,
        TextMaskModule

    ],
    declarations: [ClientsDetailComponent

    ]
})
export class ClientsDetailModule {}



