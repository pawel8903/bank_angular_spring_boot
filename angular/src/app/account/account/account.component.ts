import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolsService } from '../../tools.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', '../styles.css']
})
export class AccountComponent implements OnInit {

  transactions: any = [];
  account_id: any = {};
  numberOfPages;
  numberOfPagesArray = [];
  page = 1;
  

  constructor(public transactioService: TransactionService, public toolsService: ToolsService,
    private router: Router, private route: ActivatedRoute, public accountService: AccountService) { }

  ngOnInit() {
    this.getAccountId();
  }

  getAccountId() {
    this.route.params.subscribe(params => {
      this.account_id = params['account_id'];
      
      if (this.account_id == undefined) {
        this.accountService.getAccounts(JSON.parse(localStorage.getItem('user')).id).subscribe((result) => {
          this.account_id = result[0].id;
          this.getTransactions();
          this.getPageNumber();
        }, (err) => console.error(err)
        )
      } else {
        this.getTransactions();
        this.getPageNumber();
      }
      
    })
  }

  getTransactions() {
    this.transactioService.getTransactions(this.account_id,this.page).subscribe((result) => {
      this.transactions = result;
      
      for (let i = 0; i < this.transactions.length; i++) {
        this.transactions[i].sendToAccount = this.toolsService.convertAccountNumber(String(this.transactions[i].sendToAccount))
      }
    })
  }

  getPageNumber() {
    this.numberOfPagesArray = [];
    this.page = 1;
    this.transactioService.getPageNumber(this.account_id).subscribe(result => {

      if (result == 0) {
        this.numberOfPages = 0;
      } else {
        this.numberOfPages = result % 10 == 0 ? result / 10 : Math.ceil(result / 10);
        if (this.numberOfPages != 0) {
          for (let i = 0; i < this.numberOfPages; i++) {
            this.numberOfPagesArray.push(i + 1);
          }
        }
      }

    }, err => {
        console.error(err);
    })
  }

  setPage(page) {
    this.page = page;
    this.getTransactions();
  }
  nextPage() {
    if (this.numberOfPages != this.page && this.numberOfPages != 0) {
      this.page += 1;
      this.getTransactions();
    }
  }
  previousPage() {
    if (this.page != 1 ) {
      this.page -= 1;
      this.getTransactions();
    }
  }
}
