import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageAffiliatesComponent } from './manage-affiliates.component';

const routes: Routes = [
    {
        path: '', component: ManageAffiliatesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageAffiliatesRoutingModule {
}
