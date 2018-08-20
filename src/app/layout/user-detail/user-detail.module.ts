import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';

import { UserDetailComponent } from './user-detail.component';
import { UserDetailRoutingModule } from './user-detail-routing.module';
import { AddressComponent } from '../Shared/address/address.component'
import { TextMaskModule } from 'angular2-text-mask';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        UserDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule,
        TextMaskModule

    ],
    declarations: [UserDetailComponent, AddressComponent

    ]
})
export class UserDetailModule {}



