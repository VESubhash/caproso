import { Injectable } from '@angular/core';
// import { PaLoadingSpinnerComponent } from '../layout/Shared/pa-loading-spinner/pa-loading-spinner.component';

@Injectable()
export class ScrollService {

  public disableScroll() {
    document.body.classList.add('disable-scroll');
  }

  public enableScroll() {
    document.body.classList.remove('disable-scroll');
  }
}
