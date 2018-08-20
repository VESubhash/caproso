import { Component, EventEmitter, OnDestroy, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PaModalService } from './pa-modal.service';
import { ScrollService } from '../../../services/scroll-service';

@Component({
  selector: 'pa-modal',
  templateUrl: 'pa-modal.component.html',
  styleUrls: ['pa-modal.component.scss']
})

export class PaModalComponent implements OnDestroy, OnChanges {
  @Input() public hideHeaderAndFooter: boolean;
  @Input() public dialogName: string;
  @Input() public titleText: string;
  @Input() public class: string;
  @Input() public  modalDesign: string ='modal';
  @Input() public  modalBodyCss:  string= 'modal-body';

  public isShown: boolean;
  public keys: any = {37: 1, 38: 1, 39: 1, 40: 1};

  @Output() private modalClosed = new EventEmitter<any>();
  private isRegistered: boolean;

  constructor(private modalService: PaModalService, private scrollService: ScrollService) {

  }

  public ngOnDestroy(): void {
    this.modalService.deRegisterDialog(this.dialogName);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.dialogName)
      return;

    if (changes.name && this.isRegistered) {
      throw new Error('Dialog name cannot be changed after registration.');
    }

    this.modalService.registerDialog(this.dialogName, this);
  }

  public resolve(result: any): void {
    this.scrollService.enableScroll();
    this.modalService.resolveDialog(this.dialogName, result);
    this.isShown = false;
  }

  public closeModal() {
    this.modalClosed.emit(true);
  }

  public show() {
    this.scrollService.disableScroll();
    this.isShown = true;
  }
}
