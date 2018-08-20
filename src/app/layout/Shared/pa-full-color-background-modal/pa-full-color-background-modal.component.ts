import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { PaModalService } from '../pa-modal/pa-modal.service';
import { ScrollService } from '../../../services/scroll-service';
import { UUID } from 'angular2-uuid';

@Component ({
  selector: 'pa-full-color-background-modal',
  templateUrl: 'pa-full-color-background-modal.component.html',
  styleUrls: ['pa-full-color-background-modal.component.scss']
})

export class PaFullColorBackgroundModalComponent implements OnChanges, OnDestroy {
  @Input() public overlayColor: string;
  @Input() public dialogName: string;

  public isShown: boolean;
  public id: UUID = UUID.UUID();

  @Output() private modalClosed = new EventEmitter<any>();
  @Output() private modalShown = new EventEmitter<any>();

  private isRegistered: boolean;

  constructor(
    private modalService: PaModalService,
    private scrollService: ScrollService
  ) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.dialogName)
      return;

    if (changes.name && this.isRegistered) {
      throw new Error('Dialog name cannot be changed after registration.');
    }

    this.modalService.registerDialog(this.dialogName, this);
  }

  public ngOnDestroy() {
    this.modalService.deRegisterDialog(this.dialogName);
  }

  public show() {
    this.isShown = true;
    this.modalShown.emit(true);
  }

  public closeModal() {
    this.modalClosed.emit(true);
  }

  public resolve(result: any): void {
    this.scrollService.enableScroll();
    this.modalService.resolveDialog(this.dialogName, result);
    this.isShown = false;
  }

}
