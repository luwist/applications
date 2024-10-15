import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { Scene } from 'src/app/enums';
import { MainMenuPage } from './main-menu/main-menu.page';
import { GamePlayPage } from './game-play/game-play.page';
import { GameOverPage } from './game-over/game-over.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, MainMenuPage, GamePlayPage, GameOverPage],
})
export class HomePage {
  currentScene: string = Scene.MainMenu;
  currentDifficulty!: string;

  changeDifficulty(difficulty: string): void {
    this.currentDifficulty = difficulty;

    this.currentScene = Scene.GamePlay;
  }
}
