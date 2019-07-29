import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-account',
  templateUrl: './add-new-account.component.html',
  styleUrls: ['./add-new-account.component.css', '../styles.css']
})
export class AddNewAccountComponent implements OnInit {

  newAccount: any = {};

  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit() {
    
  }

  addAccount() {
    this.newAccount.userId = JSON.parse(localStorage.getItem('user')).id;
    this.accountService.addAccount(this.newAccount).subscribe(result => {
      console.log(result)
      this.router.navigate(['/account'])
    }
    )
  }

}
