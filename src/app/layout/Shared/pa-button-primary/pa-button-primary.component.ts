import { Component, Input } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'pa-button-primary',
  templateUrl: 'pa-button-primary.component.html',
  styleUrls: ['pa-button-primary.component.scss']
})

export class PaButtonPrimaryComponent {
  @Input()
  public width: number;
  public id: UUID;

  constructor() {
    this.id = UUID.UUID();
  }

}
