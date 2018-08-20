import { Pipe, PipeTransform } from '@angular/core';
//
// @Pipe({
//   name: 'currency'
// })
// export class CurrencyPipe implements PipeTransform {
//
//   transform(value: any, args?: any): any {
//     return null;
//   }
//
// }
//
//
// import { Directive,Input,Inject, HostListener, ElementRef, OnInit } from "@angular/core";
//

const PADDING = "000000";

@Pipe({ name: "CurrencyPipe" })
export class CurrencyPipe implements PipeTransform {
    transform(value: any, args: string[]): any {
        var clean = value.replace(/[^-0-9\.]/g, '');
        var negativeCheck = clean.split('-');
        var decimalCheck = clean.split('.');

        if (negativeCheck[1] != undefined) {
            negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
            clean = negativeCheck[0] + '-' + negativeCheck[1];
            if (negativeCheck[0].length > 0) {
                clean = negativeCheck[0];
            }

        }
        if (decimalCheck[1] != undefined) {
            decimalCheck[1] = decimalCheck[1].slice(0, 2);
            clean = decimalCheck[0] + '.' + decimalCheck[1];
        }

        return clean;
    }

    parse(value: string, fractionSize: number = 2): string {

        var clean = value.replace(/[^-0-9\.]/g, '');
        var negativeCheck = clean.split('-');
        var decimalCheck = clean.split('.');

        if (negativeCheck[1] != undefined) {
            negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
            clean = negativeCheck[0] + '-' + negativeCheck[1];
            if (negativeCheck[0].length > 0) {
                clean = negativeCheck[0];
            }

        }
        if (decimalCheck[1] != undefined) {
            decimalCheck[1] = decimalCheck[1].slice(0, 2);
            clean = decimalCheck[0] + '.' + decimalCheck[1];
        }

        return clean;
    }

}
