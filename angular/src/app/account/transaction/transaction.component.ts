import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css', '../styles.css']
})
export class TransactionComponent implements OnInit {

  transaction: any = {};
  id: any = {};

  constructor(public transactionService: TransactionService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.transactionService.getTransaction(this.id).subscribe(result => {
      console.log(result)
      this.transaction = result;
    })
  }

}
