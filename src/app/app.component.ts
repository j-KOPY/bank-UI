import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'atlar-assignment';

  accounts: Array<Object> = [];
  transactions: Array<Object> = [];

  constructor(private fetchService: FetchService) {};

  ngOnInit() {

    this.fetchService.getAccount().subscribe( data => {
      return this.accounts = data.items;
    });

    this.fetchService.getTransactions().subscribe( data => {
      return this.transactions = data.items;
    });
  }
}
