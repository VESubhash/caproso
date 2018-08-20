import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageItemComponent } from './manage-item.component';

const routes: Routes = [
    {
        path: '', component: ManageItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageItemRoutingModule {
}
