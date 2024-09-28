import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonFab,
  IonFabList,
  IonFabButton,
} from '@ionic/angular/standalone';
import { Language } from 'src/app/enums';
import { Item } from 'src/app/interfaces';
import { SpeedDialComponent } from 'src/app/components/ui/speed-dial/speed-dial.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, SpeedDialComponent],
})
export class HomePage {
  animals: any = [
    {
      id: 1,
      image: 'assets/animals/cangrejo.png',
      name: 'cangrejo',
    },
    {
      id: 2,
      image: 'assets/animals/cerdo.png',
      name: 'cerdo',
    },
    {
      id: 3,
      image: 'assets/animals/elefante.png',
      name: 'elefante',
    },
    {
      id: 4,
      image: 'assets/animals/cangrejo.png',
      name: 'cangrejo',
    },
    {
      id: 5,
      image: 'assets/animals/erizo.png',
      name: 'erizo',
    },
    {
      id: 6,
      image: 'assets/animals/hipopotamo.png',
      name: 'hipopotamo',
    },
    {
      id: 7,
      image: 'assets/animals/leon.png',
      name: 'leon',
    },
    {
      id: 8,
      image: 'assets/animals/oveja.png',
      name: 'oveja',
    },
  ];

  items: Item[] = [
    {
      icon: 'assets/flags/arg.png',
      command: () => this.changeLanguage(Language.Spanish),
      itemDefault: true,
    },
    {
      icon: 'assets/flags/pr.png',
      command: () => this.changeLanguage(Language.Portuguese),
    },
    {
      icon: 'assets/flags/usa.png',
      command: () => this.changeLanguage(Language.English),
    },
  ];

  currentLanguage: string = Language.Spanish;

  changeLanguage(language: string): void {
    this.currentLanguage = language;
  }
}
