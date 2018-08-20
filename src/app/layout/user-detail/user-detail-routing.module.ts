import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail.component';

const routes: Routes = [
    // {
    //     path: '', component: UserDetailComponent,
    //     path: 'user-detail/:id', component: UserDetailComponent
    // }
    { path: '', component: UserDetailComponent },
    { path: 'user-detail', component: UserDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserDetailRoutingModule {
}
