import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AffiliateDetailComponent } from './affiliate-detail.component';

const routes: Routes = [

    { path: '', component: AffiliateDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AffiliateDetailRoutingModule {
}
