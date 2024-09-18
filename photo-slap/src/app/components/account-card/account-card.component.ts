import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-card',
  standalone: true,
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
})
export class AccountCardComponent {
  @Input() role!: string;
  @Input() selected!: boolean;
}
