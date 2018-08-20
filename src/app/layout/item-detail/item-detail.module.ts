import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { StatModule } from '../../shared';
import { ItemDetailComponent } from './item-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemDetailRoutingModule } from './item-detail-routing.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        ItemDetailRoutingModule,
        StatModule,
        DataTablesModule,
        ReactiveFormsModule,
        CurrencyMaskModule
    ],
    declarations: [ItemDetailComponent]

})
export class ItemDetailModule {}
