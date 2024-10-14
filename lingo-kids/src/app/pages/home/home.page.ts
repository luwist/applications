import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonContent,
  IonFooter,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Language, Theme } from 'src/app/enums';
import { Item } from 'src/app/interfaces';
import { SpeedDialComponent } from 'src/app/components/ui/speed-dial/speed-dial.component';
import { AuthService } from 'src/app/services';
import { NativeAudio } from '@capacitor-community/native-audio';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonContent,
    IonFooter,
    IonToolbar,
    SpeedDialComponent,
  ],
})
export class HomePage implements OnInit {
  animals: any[] = [
    {
      id: 1,
      image: 'assets/animals/camaleon.png',
      sounds: {
        en: 'assets/sounds/animals/chameleon.mp3',
        es: 'assets/sounds/animals/camaleon.mp3',
        pt: 'assets/sounds/animals/camaleão.mp3',
      },
    },
    {
      id: 2,
      image: 'assets/animals/chancho.png',
      sounds: {
        en: 'assets/sounds/animals/pig.mp3',
        es: 'assets/sounds/animals/cerdo.mp3',
        pt: 'assets/sounds/animals/porco.mp3',
      },
    },
    {
      id: 3,
      image: 'assets/animals/elefante.png',
      sounds: {
        en: 'assets/sounds/animals/elephant.mp3',
        es: 'assets/sounds/animals/elefante-arg.mp3',
        pt: 'assets/sounds/animals/elefante-pt.mp3',
      },
    },
    {
      id: 4,
      image: 'assets/animals/cangrejo.png',
      sounds: {
        en: 'assets/sounds/animals/crab.mp3',
        es: 'assets/sounds/animals/cangrejo.mp3',
        pt: 'assets/sounds/animals/caranguejo.mp3',
      },
    },
    {
      id: 5,
      image: 'assets/animals/hipopotamo.png',
      sounds: {
        en: 'assets/sounds/animals/hippo.mp3',
        es: 'assets/sounds/animals/hipopotamo.mp3',
        pt: 'assets/sounds/animals/hipopotamo-pt.mp3',
      },
    },
    {
      id: 6,
      image: 'assets/animals/leon.png',
      sounds: {
        en: 'assets/sounds/animals/lion.mp3',
        es: 'assets/sounds/animals/leon.mp3',
        pt: 'assets/sounds/animals/leão.mp3',
      },
    },
  ];

  colors: any[] = [
    {
      id: 1,
      color: '#5364FF',
      sounds: {
        en: 'assets/sounds/animals/blue.mp3',
        es: 'assets/sounds/animals/azul.mp3',
        pt: 'assets/sounds/animals/azul-pt.mp3',
      },
    },
    {
      id: 2,
      color: '#FFA653',
      sounds: {
        en: 'assets/sounds/animals/orange.mp3',
        es: 'assets/sounds/animals/naranja.mp3',
        pt: 'assets/sounds/animals/laranja.mp3',
      },
    },
    {
      id: 3,
      color: '#FF5364',
      sounds: {
        en: 'assets/sounds/animals/rose.mp3',
        es: 'assets/sounds/animals/rosa.mp3',
        pt: 'assets/sounds/animals/rosa-pt.mp3',
      },
    },
    {
      id: 4,
      color: '#4FBA6F',
      sounds: {
        en: 'assets/sounds/animals/green.mp3',
        es: 'assets/sounds/animals/verde.mp3',
        pt: 'assets/sounds/animals/verde-pt.mp3',
      },
    },
    {
      id: 5,
      color: '#955BA5',
      sounds: {
        en: 'assets/sounds/animals/violet.mp3',
        es: 'assets/sounds/animals/violeta.mp3',
        pt: 'assets/sounds/animals/violeta-pt.mp3',
      },
    },
    {
      id: 6,
      color: '#44BBC3',
      sounds: {
        en: 'assets/sounds/animals/sky-blue.mp3',
        es: 'assets/sounds/animals/celeste.mp3',
        pt: 'assets/sounds/animals/ceu-azul.mp3',
      },
    },
  ];

  numbers: any[] = [
    {
      id: 1,
      number: 1,
      sounds: {
        en: 'assets/sounds/animals/one.mp3',
        es: 'assets/sounds/animals/uno.mp3',
        pt: 'assets/sounds/animals/um.mp3',
      },
    },
    {
      id: 2,
      number: 2,
      sounds: {
        en: 'assets/sounds/animals/two.mp3',
        es: 'assets/sounds/animals/dos.mp3',
        pt: 'assets/sounds/animals/dois.mp3',
      },
    },
    {
      id: 3,
      number: 3,
      sounds: {
        en: 'assets/sounds/animals/three.mp3',
        es: 'assets/sounds/animals/tres.mp3',
        pt: 'assets/sounds/animals/tres-pt.mp3',
      },
    },
    {
      id: 4,
      number: 4,
      sounds: {
        en: 'assets/sounds/animals/four.mp3',
        es: 'assets/sounds/animals/cuatro.mp3',
        pt: 'assets/sounds/animals/quatro.mp3',
      },
    },
    {
      id: 5,
      number: 5,
      sounds: {
        en: 'assets/sounds/animals/five.mp3',
        es: 'assets/sounds/animals/cinco.mp3',
        pt: 'assets/sounds/animals/cinco-pt.mp3',
      },
    },
    {
      id: 6,
      number: 6,
      sounds: {
        en: 'assets/sounds/animals/six.mp3',
        es: 'assets/sounds/animals/seis.mp3',
        pt: 'assets/sounds/animals/seis-pt.mp3',
      },
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

  isActive: boolean = false;

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.animals.forEach((animal) => {
      for (const sound in animal.sounds) {
        NativeAudio.preload({
          assetId: animal.sounds[sound],
          assetPath: animal.sounds[sound],
          audioChannelNum: 1,
          isUrl: false,
        });
      }
    });

    this.colors.forEach((color) => {
      for (const sound in color.sounds) {
        NativeAudio.preload({
          assetId: color.sounds[sound],
          assetPath: color.sounds[sound],
          audioChannelNum: 1,
          isUrl: false,
        });
      }
    });

    this.numbers.forEach((number) => {
      for (const sound in number.sounds) {
        NativeAudio.preload({
          assetId: number.sounds[sound],
          assetPath: number.sounds[sound],
          audioChannelNum: 1,
          isUrl: false,
        });
      }
    });
  }

  onItemSelected(item: any): void {
    this.itemSelected = item.id;

    switch (this.currentTheme) {
      case Theme.Animals:
        this.animals.forEach((animal) => {
          for (const sound in animal.sounds) {
            if (
              animal.id === item.id &&
              this.currentLanguage == Language.Spanish &&
              sound === 'es'
            ) {
              NativeAudio.play({
                assetId: animal.sounds[sound],
              });
            } else if (
              animal.id === item.id &&
              this.currentLanguage == Language.English &&
              sound === 'en'
            ) {
              NativeAudio.play({
                assetId: animal.sounds[sound],
              });
            } else if (
              animal.id === item.id &&
              this.currentLanguage == Language.Portuguese &&
              sound === 'pt'
            ) {
              NativeAudio.play({
                assetId: animal.sounds[sound],
              });
            }
          }
        });
        break;
      case Theme.Colors:
        this.colors.forEach((color) => {
          for (const sound in color.sounds) {
            if (
              color.id === item.id &&
              this.currentLanguage == Language.Spanish &&
              sound === 'es'
            ) {
              NativeAudio.play({
                assetId: color.sounds[sound],
              });
            } else if (
              color.id === item.id &&
              this.currentLanguage == Language.English &&
              sound === 'en'
            ) {
              NativeAudio.play({
                assetId: color.sounds[sound],
              });
            } else if (
              color.id === item.id &&
              this.currentLanguage == Language.Portuguese &&
              sound === 'pt'
            ) {
              NativeAudio.play({
                assetId: color.sounds[sound],
              });
            }
          }
        });
        break;
      case Theme.Numbers:
        this.numbers.forEach((number) => {
          for (const sound in number.sounds) {
            if (
              number.id === item.id &&
              this.currentLanguage == Language.Spanish &&
              sound === 'es'
            ) {
              NativeAudio.play({
                assetId: number.sounds[sound],
              });
            } else if (
              number.id === item.id &&
              this.currentLanguage == Language.English &&
              sound === 'en'
            ) {
              NativeAudio.play({
                assetId: number.sounds[sound],
              });
            } else if (
              number.id === item.id &&
              this.currentLanguage == Language.Portuguese &&
              sound === 'pt'
            ) {
              NativeAudio.play({
                assetId: number.sounds[sound],
              });
            }
          }
        });
        break;
    }
  }

  changeLanguage(language: string): void {
    this.currentLanguage = language;
  }

  changeTheme(theme: string): void {
    this.currentTheme = theme;
  }

  async onLogout(): Promise<void> {
    await this._authService.logout();
  }
}
