import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {
  // Ideally I would have liked to type this better by creating an interface of the transaction object.
  @Input() transactions: Array<any> = [];

  constructor() {}

}
