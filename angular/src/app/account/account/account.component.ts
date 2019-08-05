import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolsService } from '../../tools.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', '../styles.css']
})
export class AccountComponent implements OnInit {

  transactions: any = [];
  account_id: any = {};
  tmp: any = {};
  numberOfPages: number;
  numberOfPagesArray = [];
  page = 1;


  constructor(public transactioService: TransactionService, public toolsService: ToolsService,
    private router: Router, private route: ActivatedRoute) { }

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
      this.getTransactions();
      this.getPageNumber();
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
    this.transactioService.getPageNumber(this.account_id).subscribe(result => {
      this.numberOfPages = result % 10 == 0 ? result : (result / 10 + 1).toFixed();

      for (let i = 0; i < this.numberOfPages; i++) {
        this.numberOfPagesArray.push(i+1);
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
    if (this.numberOfPages != this.page) {
      this.page += 1;
      this.getTransactions();
    }
  }
  previousPage() {
    if (this.page != 1) {
      this.page -= 1;
      this.getTransactions();
    }
  }
}
