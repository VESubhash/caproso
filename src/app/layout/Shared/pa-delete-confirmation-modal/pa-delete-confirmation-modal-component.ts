import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { PaModalComponent } from '../pa-modal/pa-modal.component';

@Component({
  selector: 'pa-delete-confirmation-modal-component',
  templateUrl: 'pa-delete-confirmation-modal-component.html',
  styleUrls: ['pa-delete-confirmation-modal-component.scss'],
})

export class PaDeleteConfirmationModalComponent {
  @Input() public draftObservationId: UUID;
  @Input() public headerMessage: string;
  @Input() public innerMessage: string;
    @Input() public dialogName: string;
  @ViewChild('modal') public modal: PaModalComponent;

  public onCancelButton() {
    this.modal.resolve(false);
  }

  public onDeleteButton() {
    this.modal.resolve(true);
  }
}
