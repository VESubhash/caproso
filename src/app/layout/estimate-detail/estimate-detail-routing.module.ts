import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimateDetailComponent } from './estimate-detail.component';
import { AuthGuard } from '../../shared/guard';
import { EstimateCbdComponent } from '../estimate-cbd/estimate-cbd.component';
import { EstimateCreateComponent } from '../estimate-create/estimate-create.component';
import { EstimateItemComponent } from '../estimate-item/estimate-item.component';
import { EstimateDocumentComponent } from '../estimate-document/estimate-document.component';
import { EstimateMarkupsComponent } from '../estimate-markups/estimate-markups.component';
import { FormsModule } from '@angular/forms';
import {EstimatePrintComponent} from '../estimate-print/estimate-print.component';
import {EstimatedItemComponent} from '../estimated-item/estimated-item.component';
import { ManageEstimatesComponent } from '../manage-estimates/manage-estimates.component';

const routes: Routes = [
    {
        path: '', component: EstimateDetailComponent,
        children: [
            {path: 'create', component: EstimateCreateComponent, canActivate: [AuthGuard]},
            {path: 'manage-estimates', component: ManageEstimatesComponent, canActivate: [AuthGuard]},
            {path: 'group-estimates', component: ManageEstimatesComponent, canActivate: [AuthGuard]},
            {path: 'cbd', component: EstimateCbdComponent, canActivate: [AuthGuard]},
            {path: 'item', component: EstimateItemComponent, canActivate: [AuthGuard]},
            {path: 'estimated-item', component: EstimatedItemComponent, canActivate: [AuthGuard]},
            {path: 'document', component: EstimateDocumentComponent, canActivate: [AuthGuard]},
            {path: 'markups', component: EstimateMarkupsComponent, canActivate: [AuthGuard]},
            {path: 'print', component: EstimatePrintComponent, canActivate: [AuthGuard]},

             ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),
        FormsModule
    ],
    exports: [RouterModule]
})
export class EstimateDetailRoutingModule {
}
