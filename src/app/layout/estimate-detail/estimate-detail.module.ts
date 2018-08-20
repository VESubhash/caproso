import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AuthGuard, StatModule} from '../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstimateDetailRoutingModule } from './estimate-detail-routing.module';
import { PaRouterOutletObservationComponent } from '../Shared/pa-router-outlet-observation/pa-router-outlet-observation.component';
import { PaGolfballChecklistComponent } from '../Shared/pa-golfball-checklist/pa-golfball-checklist.component';
import { EstimateCbdComponent } from '../estimate-cbd/estimate-cbd.component';
import { EstimateDetailComponent } from './estimate-detail.component';
import { EstimateCreateComponent } from '../estimate-create/estimate-create.component';
import { EstimateItemComponent } from '../estimate-item/estimate-item.component';
import { EstimateDocumentComponent } from '../estimate-document/estimate-document.component';
import { EstimateMarkupsComponent } from '../estimate-markups/estimate-markups.component';
import { PaDeleteConfirmationModalComponent } from '../Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component';
import { PaFullColorBackgroundModalComponent } from '../Shared/pa-full-color-background-modal/pa-full-color-background-modal.component';
import { PaInfoModalComponent } from '../Shared/pa-info-modal/pa-info-modal.component';
import { PaModalComponent } from '../Shared/pa-modal/pa-modal.component';
import { PaButtonPrimaryComponent } from '../Shared/pa-button-primary/pa-button-primary.component';
import { ItemDetailComponent } from '../estimate-item/item-detail/item-detail.component';
import { PaCheckboxComponent } from '../Shared/pa-checkbox/pa-checkbox.component';
import { MarkupDetailComponent } from '../estimate-markups/markup-detail/markup-detail.component';
import { EstimatePrintComponent } from '../estimate-print/estimate-print.component';
import { EstimatedItemComponent } from '../estimated-item/estimated-item.component';
import { EstimateDataComponent } from '../estimate-data/estimate-data.component';
import { TextMaskModule } from 'angular2-text-mask';
import { ManageEstimatesComponent } from '../manage-estimates/manage-estimates.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        EstimateDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule,
        FormsModule,
        TextMaskModule,
        CurrencyMaskModule


    ],
    declarations: [
         EstimateDetailComponent,
         PaRouterOutletObservationComponent,
         PaGolfballChecklistComponent,
         // PaDeleteConfirmationModalComponent,
         // PaFullColorBackgroundModalComponent,
         // PaModalComponent,
         // PaInfoModalComponent,
         // PaCheckboxComponent,
         //PaButtonPrimaryComponent,
         EstimateCbdComponent,
         EstimateCreateComponent,
         EstimateItemComponent,
         EstimatedItemComponent,
         EstimateDocumentComponent,
         EstimateMarkupsComponent,
         ItemDetailComponent,
         MarkupDetailComponent,
         EstimatePrintComponent,
         EstimateDataComponent,
        ManageEstimatesComponent
    ],
    providers: [MarkupDetailComponent, ItemDetailComponent, EstimateDataComponent
        ]

})

export class EstimateDetailModule {}
