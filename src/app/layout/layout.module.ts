import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from '../directives';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { ManageSubcategoriesComponent } from './manage-subcategories/manage-subcategories.component';
import { DataTablesModule } from 'angular-datatables';
import { PaModalComponent } from './Shared/pa-modal/pa-modal.component';
import { PaButtonPrimaryComponent } from './Shared/pa-button-primary/pa-button-primary.component';
import { PaDeleteConfirmationModalComponent } from './Shared/pa-delete-confirmation-modal/pa-delete-confirmation-modal-component';
import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { EstimateDetailComponent } from './estimate-detail/estimate-detail.component';
import { EstimateCreateComponent } from './estimate-create/estimate-create.component';
import { ManageEstimatesComponent } from './manage-estimates/manage-estimates.component';
import { EstimateCbdComponent } from './estimate-cbd/estimate-cbd.component';
import { EstimateItemComponent } from './estimate-item/estimate-item.component';
import { EstimatedItemComponent } from './estimated-item/estimated-item.component';
import { EstimateDocumentComponent } from './estimate-document/estimate-document.component';
import { EstimateMarkupsComponent } from './estimate-markups/estimate-markups.component';
import { EstimatePrintComponent } from './estimate-print/estimate-print.component';
import { EstimateDataComponent } from './estimate-data/estimate-data.component';
import { ItemDetailComponent } from './estimate-item/item-detail/item-detail.component';
import { MarkupDetailComponent } from './estimate-markups/markup-detail/markup-detail.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ManageProjectManagerComponent } from './manage-project-manager/manage-project-manager.component';
import { ProjectManagerDetailComponent } from './project-manager-detail/project-manager-detail.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {ManageClientsComponent} from './manage-clients/manage-clients.component';
@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
        DataTablesModule,
        CurrencyMaskModule,
        NgMultiSelectDropDownModule.forRoot()

    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        AlertComponent,
        ManageCategoriesComponent,
        ManageSubcategoriesComponent,
        ManageGroupsComponent,
        ManageProjectManagerComponent,
        ManageClientsComponent,
        ProjectManagerDetailComponent,
        EstimateDetailComponent,
        EstimateCreateComponent,
        ManageEstimatesComponent,
        EstimateCbdComponent,
        EstimateItemComponent,
        EstimatedItemComponent,
        EstimateDocumentComponent,
        EstimateMarkupsComponent,
        EstimatePrintComponent,
        PaDeleteConfirmationModalComponent,
        EstimateDataComponent,
        PaModalComponent,
        ItemDetailComponent,
        MarkupDetailComponent,
        PaButtonPrimaryComponent

    ],
    providers: [
        MarkupDetailComponent,
        ItemDetailComponent,
        EstimateDataComponent
    ]
})
export class LayoutModule {}
