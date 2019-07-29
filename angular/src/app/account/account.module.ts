import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { MainOptionsComponent } from './main-options/main-options.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddNewAccountComponent } from './add-new-account/add-new-account.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';
import { RecipientComponent } from './recipient/recipient.component';


const routes: Routes = [
  {
    path: '', component: TopBarComponent, children: [
      { path: '', component: AccountComponent },
      { path: 'transactions/:account_id', component: AccountComponent },
      { path: 'add_new_account', component: AddNewAccountComponent },
      { path: 'transaction/:id', component: TransactionComponent },
      { path: 'transfer', component: TransferComponent },
      { path: 'recipient', component: RecipientComponent }
    ],
  },
 
];

@NgModule({
  declarations: [TopBarComponent, SettingsComponent, MainOptionsComponent, AddNewAccountComponent, AccountComponent, TransactionComponent, TransferComponent, RecipientComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes ),
    FormsModule,
    HttpClientModule,
  ]
})
export class AccountModule { }
