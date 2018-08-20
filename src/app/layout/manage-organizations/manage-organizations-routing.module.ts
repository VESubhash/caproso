import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageOrganizationsComponent } from './manage-organizations.component';

const routes: Routes = [
    {
        path: '', component: ManageOrganizationsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageOrganizationsRoutingModule {
}
