import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-main-options',
  templateUrl: './main-options.component.html',
  styleUrls: ['./main-options.component.css', '../styles.css']
})
export class MainOptionsComponent implements OnInit {
 
  isOn: boolean;
  actuallOptions: string = "";
  accounts: any = [];
  optionClick: boolean = false;

  constructor(public accountService: AccountService) { }

  ngOnInit() {
    this.isOn = false;
    this.accountService.getAccounts().subscribe(result => {
      this.accounts = result;
      
    })
  }

  showSecondOptions(option) {
    
    if (this.actuallOptions == "") {
      this.isOn = true;
      this.actuallOptions = option;
    } else {
      if (this.actuallOptions == option) {
        this.actuallOptions = "";
        this.isOn = false;
      } else {
        this.actuallOptions = option;
        this.isOn = true;
      }
    }

  }
  
  
}
