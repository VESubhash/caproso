import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDocumentsComponent } from './manage-documents.component';

const routes: Routes = [
    {
        path: '', component: ManageDocumentsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageDocumentsRoutingModule {
}
