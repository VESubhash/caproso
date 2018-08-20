import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { UserGroupRoutingModule} from './user-group-routing.module';
import { UserGroupComponent } from './user-group.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        UserGroupRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [UserGroupComponent]

})
export class UserGroupModule {}
