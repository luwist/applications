import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'ng-fileupload',
  standalone: true,
  imports: [CommonModule, IonContent],
  template: `
    <ion-content class="ion-padding">
      <div class="wrapper">
        <img [src]="currentImage" alt="" />

        <div class="body">
          <div>Subiendo...</div>
        </div>
      </div>
    </ion-content>
    <!-- <div class="wrapper">
      <img [src]="currentImage" alt="" />

      <div class="body"></div>
    </div> -->
    <!-- <ng-container [ngTemplateOutlet]="previewTemplate" /> -->
  `,
  styleUrls: ['./fileupload.component.scss'],
})
export class FileuploadComponent implements OnInit, AfterContentInit {
  @ContentChild('preview') private _previewTemplate!: TemplateRef<any>;

  previewTemplate!: TemplateRef<any>;

  @Input() currentImage: string = '';

  constructor() {}

  ngAfterContentInit(): void {
    this.previewTemplate = this._previewTemplate;
  }

  ngOnInit() {}
}
