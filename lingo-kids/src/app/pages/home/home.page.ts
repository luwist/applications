import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonContent, IonFooter, IonToolbar } from '@ionic/angular/standalone';
import { Language, Theme } from 'src/app/enums';
import { Item } from 'src/app/interfaces';
import { SpeedDialComponent } from 'src/app/components/ui/speed-dial/speed-dial.component';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonContent, IonFooter, IonToolbar, SpeedDialComponent],
})
export class HomePage {
  animals: any = [
    {
      id: 1,
      image: 'assets/animals/camaleon.png',
      sound: 'assets/sounds/animals/camaleon.mp4',
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

  colors: any = [
    {
      id: 1,
      color: '#5364FF',
    },
    {
      id: 2,
      color: '#FFA653',
    },
    {
      id: 3,
      color: '#E57E25',
    },
    {
      id: 4,
      color: '#FF5364',
    },
    {
      id: 5,
      color: '#4FBA6F',
    },
    {
      id: 6,
      color: '#802D40',
    },
    {
      id: 7,
      color: '#955BA5',
    },
    {
      id: 8,
      color: '#44BBC3',
    },
  ];

  numbers: any = [
    {
      id: 1,
      number: 1,
    },
    {
      id: 2,
      number: 2,
    },
    {
      id: 2,
      number: 2,
    },
    {
      id: 3,
      number: 3,
    },
    {
      id: 5,
      number: 5,
    },
    {
      id: 6,
      number: 6,
    },
    {
      id: 7,
      number: 7,
    },
    {
      id: 8,
      number: 8,
    },
  ];

  languages: Item[] = [
    {
      id: 1,
      icon: 'assets/flags/arg.png',
      command: () => this.changeLanguage(Language.Spanish),
      itemDefault: true,
    },
    {
      id: 2,
      icon: 'assets/flags/pr.png',
      command: () => this.changeLanguage(Language.Portuguese),
    },
    {
      id: 3,
      icon: 'assets/flags/usa.png',
      command: () => this.changeLanguage(Language.English),
    },
  ];

  themes: Item[] = [
    {
      id: 1,
      icon: 'assets/themes/ganado.png',
      command: () => this.changeTheme(Theme.Animals),
      itemDefault: true,
    },
    {
      id: 2,
      icon: 'assets/themes/numeros.png',
      command: () => this.changeTheme(Theme.Numbers),
    },
    {
      id: 3,
      icon: 'assets/themes/pallete.png',
      command: () => this.changeTheme(Theme.Colors),
    },
  ];

  currentLanguage: string = Language.Spanish;
  currentTheme: string = Theme.Animals;

  itemSelected!: number;

  constructor(private _authService: AuthService) {}

  onItemSelected(item: any): void {
    this.itemSelected = item.id;
  }

  changeLanguage(language: string): void {
    console.log(`Cambiar el idioma a ${language}`);
    this.currentLanguage = language;
  }

  changeTheme(theme: string): void {
    console.log(`Cambiar el tema a ${theme}`);
    this.currentTheme = theme;
  }

  async onLogout(): Promise<void> {
    await this._authService.logout();
  }
}
