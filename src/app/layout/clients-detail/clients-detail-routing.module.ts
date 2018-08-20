import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsDetailComponent } from './clients-detail.component';

const routes: Routes = [

    { path: '', component: ClientsDetailComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsDetailRoutingModule {
}
