import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipientService } from '../recipient.service';
import { ToolsService } from '../../tools.service';

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
  

  constructor(public accountService: AccountService, public recipientService: RecipientService, public toolsService: ToolsService,
    public transactionService: TransactionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.accountService.getAccounts(JSON.parse(localStorage.getItem('user')).id).subscribe(result => {
      this.accounts = result;
      for (let i = 0; i < this.accounts.length; i++) {
        this.accounts[i].accountNumber = this.toolsService.convertAccountNumber(String(this.accounts[i].accountNumber))
      }
    });

    this.recipient.id = this.route.snapshot.paramMap.get('recipientId');
    
    if (this.recipient.id != null) {
      this.recipientService.getRecipient(this.recipient.id).subscribe(result => {
        this.recipient = result;
        this.existResipient();
      })
    }
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
    this.transaction.sendToAccount = this.toolsService.deconvertAccountNumber(this.transfer.recipientAccount);
    
  }

  checkTransfer() {
    
    // false = error true = no error
    this.err_accountNumber = (this.transfer.accountNumber == '') ? false : true;
    this.err_recipientAccount = (this.transfer.recipientAccount == '' || !(/^([0-9]{4})+\ ([0-9]{4})+\ ([0-9]{4})+\ ([0-9]{4})$/.test(this.transfer.recipientAccount)))
      ? false : true;
    this.err_description = (this.transfer.description == '') ? false : true;
    this.err_amount = (!(/^[0-9]+\.([0-9]{2})$/.test(this.transfer.amount) && this.transfer.amount != '0.00')) ? false : true;

    return this.err_accountNumber && this.err_recipientAccount && this.err_amount && this.err_description;
  }

  addAdr() {
    this.addAdress = !this.addAdress;
  }

  saveRecipient() {
    if (this.transfer.recipient != undefined && this.transfer.recipient != '') {
      
      this.recipient.name = this.transfer.recipient.toUpperCase();
      this.recipient.accountNumber = this.toolsService.deconvertAccountNumber(this.transfer.recipientAccount);
      this.recipient.address = this.transfer.address;
      this.recipient.userId = JSON.parse(localStorage.getItem('user')).id;
      console.log(this.recipient)
      if (this.recipient.id != null) {
        this.recipientService.updateRecipient(this.recipient).subscribe(err => {
          console.log(err);
        })
      } else {
        this.recipientService.saveRecipient(this.recipient).subscribe(result => {

        }, err => console.log(err)
        )
      }
      
    }
  }

  convertAccountNumber() {
    this.transfer.recipientAccount = this.toolsService.convertAccountNumber(this.transfer.recipientAccount)
  }

  existResipient() {
    
    this.transfer.recipient = this.recipient.name;
    this.transfer.recipientAccount = this.toolsService.convertAccountNumber(String(this.recipient.accountNumber));
    this.transfer.address = this.recipient.address;
  }

}
