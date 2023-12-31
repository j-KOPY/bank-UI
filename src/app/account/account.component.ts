import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  @Input() accounts: Array<Object> = [];
  @Input() item: Array<Object> = [];

  constructor() {}

}
