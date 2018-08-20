import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Golfball } from '../pa-golfball-checklist/Golfball.model';
import { ChildDetailsModel } from './ChildDetails.model';
import { Router } from '@angular/router';

@Component({
  selector: 'pa-router-outlet-observation',
  templateUrl: 'pa-router-outlet-observation.component.html',
  styleUrls: ['pa-router-outlet-observation.component.scss']
})

export class PaRouterOutletObservationComponent  implements OnInit {

  public currentUrl: string;

  @Input()
  public golfBalls: Golfball[] = [];

  @Input()
  public childDetails: ChildDetailsModel;

  @Output()
  private saveObservation: EventEmitter<any> = new EventEmitter<any>();

  public constructor(private router: Router) {

  }

  public ngOnInit() {

    this.currentUrl = this.router.url;

    switch (this.currentUrl ) {
      case '/estimate/create':
        this.updateGolfBalls(0);
        break;
      case '/estimate/cbd':
        this.updateGolfBalls(1);
        break;
      case '/estimate/document':
        this.updateGolfBalls(2);
        break;
      case '/estimate/item':
        this.updateGolfBalls(3);
        break;
      case '/estimate/markups':
        this.updateGolfBalls(4);
        break;
      default:
        this.updateGolfBalls(0);
        break;
    }
}


  public updateGolfBalls(state: number) {
      for (let i = 0; i <= 4; i++) {
              this.golfBalls[i].complete = false;
              this.golfBalls[i].current = false;
      }

    for (let i = 0; i <= state; i++) {
      if (i === state) {
      this.golfBalls[i].current = true;
      }
      if (i < state) {
      this.golfBalls[i].complete = true;
      this.golfBalls[i].current = false;
      }
    }
  }

}
