import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {GeneralInfoModule} from './general-info/general-info.module';
import {ManageSubcategoriesComponent} from './manage-subcategories/manage-subcategories.component';
import {ManageCategoriesComponent} from './manage-categories/manage-categories.component';
import {ManageGroupsComponent} from './manage-groups/manage-groups.component';
import {EstimateDetailComponent} from './estimate-detail/estimate-detail.component';
import {AuthGuard} from '../shared/guard';
import {EstimateCreateComponent} from './estimate-create/estimate-create.component';
import {EstimatedItemComponent} from './estimated-item/estimated-item.component';
import {EstimateMarkupsComponent} from './estimate-markups/estimate-markups.component';
import {ManageEstimatesComponent} from './manage-estimates/manage-estimates.component';
import {EstimateItemComponent} from './estimate-item/estimate-item.component';
import {EstimatePrintComponent} from './estimate-print/estimate-print.component';
import {EstimateCbdComponent} from './estimate-cbd/estimate-cbd.component';
import {EstimateDocumentComponent} from './estimate-document/estimate-document.component';
import {ManageProjectManagerComponent} from './manage-project-manager/manage-project-manager.component';
import {ProjectManagerDetailComponent} from './project-manager-detail/project-manager-detail.component';
import {ManageClientsComponent} from './manage-clients/manage-clients.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'general-info', loadChildren: './general-info/general-info.module#GeneralInfoModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'manage-users', loadChildren: './manage-user/manage-user.module#ManageUserModule' },
            { path: 'manage-addresses', loadChildren: './manage-addresses/manage-addresses.module#ManageAddressesModule' },
            { path: 'manage-groups', component: ManageGroupsComponent },
            { path: 'manage-categories',component: ManageCategoriesComponent },
            { path: 'manage-units', loadChildren: './manage-units/manage-units.module#ManageUnitsModule' },
            { path: 'manage-subcategories', component: ManageSubcategoriesComponent },
            { path: 'manage-project-manager', component: ManageProjectManagerComponent },
            { path: 'project-manager-detail', component: ProjectManagerDetailComponent },
            { path: 'manage-organizations', loadChildren: './manage-organizations/manage-organizations.module#ManageOrganizationsModule' },
            { path: 'manage-affiliates', loadChildren: './manage-affiliates/manage-affiliates.module#ManageAffiliatesModule' },
            { path: 'manage-items', loadChildren: './manage-items/manage-items.module#ManageItemsModule' },
            { path: 'manage-item', loadChildren: './manage-item/manage-item.module#ManageItemModule' },
            { path: 'manage-clients', component: ManageClientsComponent },
            { path: 'manage-documents', loadChildren: './manage-documents/manage-documents.module#ManageDocumentsModule' },
            { path: 'group-detail', loadChildren: './group-detail/group-detail.module#GroupDetailModule' },
            { path: 'user-group', loadChildren: './user-group/user-group.module#UserGroupModule' },
            { path: 'category-detail', loadChildren: './category-detail/category-detail.module#CategoryDetailModule' },
            { path: 'unit-detail', loadChildren: './unit-detail/unit-detail.module#UnitDetailModule' },
            { path: 'subcategory-detail', loadChildren: './subcategory-detail/subcategory-detail.module#SubcategoryDetailModule' },
            { path: 'item-detail', loadChildren: './item-detail/item-detail.module#ItemDetailModule' },
            { path: 'address-detail', loadChildren: './address-detail/address-detail.module#AddressDetailModule' },
            { path: 'organization-detail', loadChildren: './organization-detail/organization-detail.module#OrganizationDetailModule' },
            { path: 'affiliate-detail', loadChildren: './affiliate-detail/affiliate-detail.module#AffiliateDetailModule' },
            { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailModule' },
            { path: 'clients-detail', loadChildren: './clients-detail/clients-detail.module#ClientsDetailModule' },
            { path: 'document-detail', loadChildren: './document-detail/document-detail.module#DocumentDetailModule' },
            { path: 'estimate', component:EstimateDetailComponent,
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
            },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
    // ,
    // { component: EstimateDetailComponent,
    //     path: '',
    //     children: [
    //         { path: 'estimate-create', component: EstimateCreateComponent, canActivate: [AuthGuard] },
    //         { path: 'estimate-cbd', component: EstimateCbdComponent, canActivate: [AuthGuard] },
    //
    //     ]
    // }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
