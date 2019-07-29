import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css', '../styles.css']
})
export class TransferComponent implements OnInit {

  accounts: any = [];
  
  addAdress = false;
  transfer: any = { description: 'Przelew środków', recipient: '', address:'', recipientAccount: '', amount: '', accountNumber:''};
  transaction: any = {};
  err_accountNumber; err_recipientAccount; err_description; err_amount;
  recipient: any = {};

  constructor(public accountService: AccountService, public recipientService: RecipientService,
    public transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(result => {
      this.accounts = result;
    });
    
  }

  sendTransaction() {
    
    if (this.checkTransfer()) {
      this.convertDataTotransaction();
      this.transactionService.addTransaction(this.transaction).subscribe(result => {
        this.saveRecipient();
        this.router.navigate(['/account']);
        
      });
    } else {
      alert('Proszę wypełnić poprawnie pola');
    }
    
  }

  convertDataTotransaction() {
    for (let i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].accountNumber == this.transfer.accountNumber) {
        this.transaction.accountId = this.accounts[i].id;
      }
    }


    this.transaction.amount = this.transfer.amount;
    this.transaction.type = "Przelew własny";
    this.transaction.address = this.transfer.address;
    this.transaction.description = this.transfer.description;
    this.transaction.sendToAccount = this.transfer.recipientAccount;
    
  }

  checkTransfer() {
    
    // false = error true = no error
    this.err_accountNumber = (this.transfer.accountNumber == '') ? false : true;
    this.err_recipientAccount = (this.transfer.recipientAccount == '' || !(/^[0-9]{16}$/.test(this.transfer.recipientAccount)))
      ? false : true;
    this.err_description = (this.transfer.description == '') ? false : true;
    this.err_amount = (!(/^[0-9]+\.([0-9]{2})$/.test(this.transfer.amount) && this.transfer.amount != '0.00')) ? false : true;
    return this.err_accountNumber && this.err_recipientAccount && this.err_amount && this.err_description;
  }

  addAdr() {
    this.addAdress = !this.addAdress;
  }

  saveRecipient() {
    if (this.transfer.recipient != undefined) {
      this.recipient.name = this.transfer.recipient;
      this.recipient.accountNumber = this.transfer.recipientAccount;
      this.recipient.address = this.transfer.adress;

      this.recipientService.saveRecipient(this.recipient).subscribe(result => {
        console.log(result);
      }, err => console.log(err)
      )
    }
  }

}
