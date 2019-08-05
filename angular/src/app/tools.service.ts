import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  
  constructor() { }

  convertAccountNumber(accountNumber: string) {

    let str = accountNumber.substr(0, 4) + ' ' + accountNumber.substr(4, 4) +
      ' ' + accountNumber.substr(8, 4) + ' ' + accountNumber.substr(12,4);
    return str;
  }

  deconvertAccountNumber(accountNumber: string): number {
    let str = accountNumber.substr(0, 4) + accountNumber.substr(5, 4) + accountNumber.substr(10, 4) + accountNumber.substr(15, 4);
    return Number(str);
  }

  getFirstLetterOfName(name: string): String {
    let tmp = 0;
    let letters: string = name.charAt(0);
    for (let i = 0; i < name.length; i++) {
      if (name.charAt(i) == ' ' && tmp < 1) {
        tmp++;
        letters += name.charAt(i + 1);
      }
    }

    return letters; 
  }
}
