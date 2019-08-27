import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from '../../tools.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css', '../styles.css']
})
export class TransactionComponent implements OnInit {

  transaction: any = {};
  id: any = {};
  account: any = {};

  constructor(public transactionService: TransactionService, public accountService: AccountService,
    public toolsService: ToolsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTransaction();
    
  }

  getTransaction() {
    this.transactionService.getTransaction(this.id).subscribe(result => {
      this.transaction = result;
      this.transaction.sendToAccount = this.toolsService.convertAccountNumber(String(this.transaction.sendToAccount))
      this.getAccount();
    })
  }

  getAccount() {
    this.accountService.getAccount(this.transaction.accountId).subscribe(result => {
      this.account = result;
      this.account.accountNumber = this.toolsService.convertAccountNumber(String(this.account.accountNumber));
    }, err => {
      console.log(err);
    }
    )
  }

}
