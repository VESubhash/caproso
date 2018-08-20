import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitDetailComponent } from './unit-detail.component';

const routes: Routes = [
    {
        path: '', component: UnitDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnitDetailRoutingModule {
}
