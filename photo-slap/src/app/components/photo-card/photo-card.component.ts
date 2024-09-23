import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  standalone: true,
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input() image!: string;
  @Input() firstName!: string;
  @Input() lastName!: string;
  @Output() imageClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onImageClick() {
    this.imageClick.emit(this.image);
  }
}
