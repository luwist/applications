import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
  standalone: true,
  imports: [],
})
export class MainMenuPage {
  @Output() difficultyEvent = new EventEmitter<string>();

  onChangeDifficulty(difficulty: string): void {
    this.difficultyEvent.emit(difficulty);
  }
}
