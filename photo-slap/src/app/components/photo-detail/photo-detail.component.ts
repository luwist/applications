import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
})
export class PhotoDetailComponent {
  @Input() image!: string;

  like: number = 0;
  dislike: number = 0;

  hasLike: boolean = false;
  hasNotLike: boolean = false;

  onLike(): void {
    this.hasLike = !this.hasLike;

    this.like++;
  }

  onDislike(): void {
    this.hasNotLike = !this.hasNotLike;

    this.dislike++;
  }
}
