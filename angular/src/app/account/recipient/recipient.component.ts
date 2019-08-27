import { Component, OnInit } from '@angular/core';
import { RecipientService } from '../recipient.service';
import { ToolsService } from '../../tools.service';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css', '../styles.css']
})
export class RecipientComponent implements OnInit {

  recipients: any = [];

  constructor(public recipientService: RecipientService, public toolsService: ToolsService) { }

  ngOnInit() {
    this.recipientService.getResipients(JSON.parse(localStorage.getItem('user')).id).subscribe(result => {
      this.recipients = result;
      for (let i = 0; i < this.recipients.length; i++) {
        this.recipients[i].accountNumber = this.toolsService.convertAccountNumber(String(this.recipients[i].accountNumber));
        this.recipients[i].firstLetters = this.toolsService.getFirstLetterOfName(this.recipients[i].name);
      }
    })

    
  }



}
