import { Component } from '@angular/core';
import { IonButton, ModalController } from '@ionic/angular/standalone';
import { InputComponent } from '../ui';

@Component({
  selector: 'app-unlock-modal',
  standalone: true,
  imports: [InputComponent, IonButton],
  templateUrl: './unlock-modal.component.html',
  styleUrls: ['./unlock-modal.component.scss'],
})
export class UnlockModalComponent {
  pass = '12452';

  constructor(private _modalController: ModalController) {}

  async onUnlock(): Promise<void> {
    if (this.pass === '12452') {
      await this._modalController.dismiss();
    }
  }
}
