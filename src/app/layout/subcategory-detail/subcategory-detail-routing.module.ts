import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubcategoryDetailComponent } from './subcategory-detail.component';

const routes: Routes = [
    {
        path: '', component: SubcategoryDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubcategoryDetailRoutingModule {
}
