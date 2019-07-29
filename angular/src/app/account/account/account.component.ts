import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', '../styles.css']
})
export class AccountComponent implements OnInit {

  transactions: any = [];
  account_id: any = {};
  tmp: any = {};

  constructor(public transactioService: TransactionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAccountId();
  }

  getAccountId() {
    this.route.params.subscribe(params => {
      this.tmp = params['account_id'];
      if (this.tmp == undefined) {
        this.account_id = 1;
      } else {
        this.account_id = this.tmp;
      }
      this.getTransactions(this.account_id);
    })
  }

  getTransactions(accountId) {
    this.transactioService.getTransactions(accountId).subscribe((result) => {
      this.transactions = result;
      console.log(result);
    })
  }

}
