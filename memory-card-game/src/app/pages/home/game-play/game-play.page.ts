import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.page.html',
  styleUrls: ['./game-play.page.scss'],
  standalone: true,
  imports: [],
})
export class GamePlayPage implements OnInit {
  @ViewChildren('card') cardElement!: QueryList<any>;

  @Input() difficulty!: string;
  currentTheme: any[] = [];
  currentCard: any;
  currentCardElement: any;
  lastCard: any = null;
  lastCardElement: any;
  cardsSelected: any[] = [];

  themes: any = {
    easy: [
      {
        code: 1,
        image: 'assets/images/animals/camaleon.png',
      },
      {
        code: 2,
        image: 'assets/images/animals/cangrejo.png',
      },
      {
        code: 3,
        image: 'assets/images/animals/chancho.png',
      },
    ],
  };

  ngOnInit(): void {
    for (const theme in this.themes) {
      if (theme === this.difficulty) {
        const tempArray: any[] = [];

        for (let i = 0; i < 2; i++) {
          this.themes[theme].forEach((item: any) => {
            tempArray.push(item);
          });
        }

        const numberSelected: number[] = [];
        let next = true;

        while (next) {
          const random = Math.floor(Math.random() * (6 - 0) + 0);

          if (!numberSelected.includes(random)) {
            numberSelected.push(random);

            const element = tempArray[random];

            this.currentTheme.push({
              id: random,
              ...element,
            });
          }

          if (numberSelected.length === 6) {
            next = false;
          }
        }
      }
    }
  }

  onCardSelected(card: any): void {
    this.showCard(card);

    if (this.lastCard !== null && this.currentCard !== null) {
      const currentCardElement = this
        .currentCardElement as HTMLIonButtonElement;
      const lastCardElement = this.lastCardElement as HTMLIonButtonElement;

      if (this.lastCard.code == this.currentCard.code) {
        const currentCardFrontElement = currentCardElement
          .children[0] as HTMLDivElement;
        const lastCardFrontElement = lastCardElement
          .children[0] as HTMLDivElement;

        currentCardElement.disabled = true;
        lastCardElement.disabled = true;

        currentCardFrontElement.classList.add('disabled');
        lastCardFrontElement.classList.add('disabled');
      } else {
        setTimeout(() => {
          currentCardElement.classList.remove('show');
          lastCardElement.classList.remove('show');
        }, 1000);
      }
    }
  }

  showCard(cardSelected: any): void {
    this.cardElement.forEach((item) => {
      const button = item.nativeElement as HTMLIonButtonElement;
      const key = button.dataset['key'];

      if (cardSelected.id == Number(key)) {
        button.classList.add('show');

        if (this.currentCard == null) {
          this.currentCard = cardSelected;

          this.currentCardElement = button;
          console.log('==============Actual==============');
          console.log(this.currentCard);
          console.log('==================================');
        } else {
          this.lastCard = this.currentCard;
          this.currentCard = cardSelected;

          this.lastCardElement = this.currentCardElement;
          this.currentCardElement = button;

          console.log('==============Actual==============');
          console.log(this.currentCard);
          console.log('==============Anterior============');
          console.log(this.lastCard);
          console.log('==================================');
        }

        if (this.lastCard !== null) {
          this.currentCard = null;
          this.lastCard = null;
        }
      }
    });
  }
}
