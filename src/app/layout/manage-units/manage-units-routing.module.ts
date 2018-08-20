import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUnitsComponent } from './manage-units.component';

const routes: Routes = [
    {
        path: '', component: ManageUnitsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageUnitsRoutingModule {
}
