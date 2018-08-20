import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageDocumentsComponent } from './manage-documents.component';
import { ManageDocumentsRoutingModule } from './manage-documents-routing.module';
import { FormsModule } from '@angular/forms';







@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageDocumentsRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [ManageDocumentsComponent]

})
export class ManageDocumentsModule {}
