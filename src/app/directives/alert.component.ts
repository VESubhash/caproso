import {Component, OnInit, OnDestroy, Input, OnChanges} from '@angular/core';
import { Subscription } from 'rxjs';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { AlertService } from '../services/alert.service';


@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html',
    animations: [
        trigger('visibilityChanged', [
            state('shown' , style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('shown => hidden', animate('600ms')),
            transition('hidden => shown', animate('300ms')),
        ])
    ]
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;
 public  visiblityState = 'shown';

  public  toggle() {

        if (this.visiblityState === 'hidden')
            this.visiblityState = 'hidden'
        else
            this.visiblityState = 'shown'
    }
    constructor(private alertService: AlertService) { }


    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
            this.visiblityState = 'shown'
            setTimeout(() => {
                this.visiblityState = 'hidden';
                this.message = '';
            }, 2000)
        });
    }
    close(){

        this.visiblityState = 'hidden';
    this.message = '';
}
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
