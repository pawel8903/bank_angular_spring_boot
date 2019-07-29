import { Component, OnInit } from '@angular/core';
import { RecipientService } from '../recipient.service';

@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.css', '../styles.css']
})
export class RecipientComponent implements OnInit {

  recipients: any = [];

  constructor(public recipientService: RecipientService) { }

  ngOnInit() {
    this.recipientService.getResipients().subscribe(result => {
      this.recipients = result;
    })
  }



}
