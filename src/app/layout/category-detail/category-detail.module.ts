import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { CategoryDetailComponent } from './category-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryDetailRoutingModule } from './category-detail-routing.module';



@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CategoryDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule
    ],
    declarations: [CategoryDetailComponent]

})
export class CategoryDetailModule {}
