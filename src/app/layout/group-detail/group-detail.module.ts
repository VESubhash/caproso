import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { GroupDetailRoutingModule} from './group-detail-routing.module';
import { GroupDetailComponent } from './group-detail.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        GroupDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule
    ],
    declarations: [GroupDetailComponent]

})
export class GroupDetailModule {}
