import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentDetailComponent } from './document-detail.component';

const routes: Routes = [
    {
        path: '', component: DocumentDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DocumentDetailRoutingModule {
}
