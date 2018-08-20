import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { DocumentDetailComponent } from './document-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocumentDetailRoutingModule } from './document-detail-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DocumentDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule
    ],
    declarations: [DocumentDetailComponent]

})
export class DocumentDetailModule {}
