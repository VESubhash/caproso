import { Component, Input } from '@angular/core';
import { Golfball } from './Golfball.model';

@Component({
  selector: 'pa-golfball-checklist',
  templateUrl: 'pa-golfball-checklist.component.html',
  styleUrls: ['pa-golfball-checklist.component.scss']
})

export class PaGolfballChecklistComponent {
  @Input()
  public golfBalls: Golfball[];

  public setItemWidth(): string {
    const width: string = (100 / this.golfBalls.length).toString() + '%';
    return width;
  }

  public hasBalls(i: number) {
    return i > 0;
  }

  public isIncomplete(item: Golfball) {
    return !item.current && !item.complete;
  }
}
