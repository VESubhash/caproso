import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ManageCategoriesComponent } from './manage-categories.component';
import { ManageCategoriesRoutingModule } from './manage-categories-routing.module';
import { FormsModule } from '@angular/forms';
import {PaModalComponent} from '../Shared/pa-modal/pa-modal.component';
import {PaDeleteConfirmationModalComponent} from '../Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component';
import {PaFullColorBackgroundModalComponent} from '../Shared/pa-full-color-background-modal/pa-full-color-background-modal.component';
import {PaButtonPrimaryComponent} from '../Shared/pa-button-primary/pa-button-primary.component';









@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ManageCategoriesRoutingModule,
        StatModule,
        DataTablesModule,
        FormsModule
    ],
    declarations: [
        ManageCategoriesComponent,
        PaDeleteConfirmationModalComponent,
        PaModalComponent,
        PaButtonPrimaryComponent,

    ]

})
export class ManageCategoriesModule {}
