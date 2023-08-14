import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss']
})
export class AccountCardComponent {
  // Ideally I would have liked to type this better by creating an interface of the account object.
  @Input() accounts: Array<any> = [];

  constructor() {}
}
