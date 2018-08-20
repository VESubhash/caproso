import { PaModalComponent } from './pa-modal.component';
import { Injectable } from '@angular/core';
import { PaFullColorBackgroundModalComponent } from '../pa-full-color-background-modal/pa-full-color-background-modal.component';
import { PaInfoModalComponent } from '../pa-info-modal/pa-info-modal.component';

@Injectable()
export class PaModalService {
  private registeredDialogs: any = {}; // object used as hash map

  public registerDialog(dialogName: string, dialog: PaModalComponent|PaFullColorBackgroundModalComponent|PaInfoModalComponent): void {
    if (this.registeredDialogs[dialogName]) {
      throw new Error(`Modal with the same name ${dialogName} already registered`);
    }
    this.registeredDialogs[dialogName] = {
      name: dialogName,
      dialog
    };
    console.log('Registered dialog ' + dialogName);
  }

  public deRegisterDialog(dialogName: string): void {
    this.registeredDialogs[dialogName] = null;
  }

  public async showDialog<T>(dialogName: string): Promise<T> {
    let targetDialog = this.getDialog(dialogName);

    let dialogPromise = new Promise((resolve, reject) => {
      targetDialog.resolve = resolve;
    });
    targetDialog.dialog.show();
    let result = await dialogPromise;
    return result as T;
  }

  public resolveDialog(dialogName: string, result: any): void { // generic interface for dialog requires any
    let targetDialog = this.getDialog(dialogName);
    targetDialog.resolve(result);
  }

  private getDialog(dialogName: string): DialogInfo {
    let dialog = this.registeredDialogs[dialogName] as DialogInfo;
    if (!dialog) throw new Error(`Dialog named ${dialogName} was not registered.`);
    return dialog;
  }
}

class DialogInfo {
  public name: string;
  public dialog: PaModalComponent;
  public resolve: (result: any) => void;
}
