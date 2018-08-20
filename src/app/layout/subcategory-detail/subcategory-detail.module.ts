import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { SubcategoryDetailComponent } from './subcategory-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SubcategoryDetailRoutingModule} from './subcategory-detail-routing.module';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        SubcategoryDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule
    ],
    declarations: [SubcategoryDetailComponent]

})
export class SubcategoryDetailModule {}
