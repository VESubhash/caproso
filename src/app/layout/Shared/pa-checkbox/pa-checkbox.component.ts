import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'pa-checkbox',
  templateUrl: 'pa-checkbox.component.html',
  styleUrls: ['pa-checkbox.component.scss']
})

export class PaCheckboxComponent {
  @Input()
  public id: UUID;
  @Input()
  public checked: boolean;
  @Input()
  public disabled: boolean = false;
  @Output()
  private valueChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    this.id = UUID.UUID();
  }

  public onChange() {
    this.checked = !this.checked;
    this.valueChange.emit(this.checked);
  }
}
