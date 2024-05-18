import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() image!: string;
  @Input() username!: string;

  constructor() {}
}
