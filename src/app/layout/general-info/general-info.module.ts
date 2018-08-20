import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { GeneralInfoRoutingModule } from './general-info-routing.module';
import { GeneralInfoComponent } from './general-info.component';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        GeneralInfoRoutingModule,
        StatModule


    ],
    declarations: [
        GeneralInfoComponent,
    ]
})
export class GeneralInfoModule {}
