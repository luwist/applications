import { Component, Input } from '@angular/core';
import { Item } from 'src/app/interfaces';

@Component({
  selector: 'app-speed-dial',
  standalone: true,
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
})
export class SpeedDialComponent {
  @Input() items!: Item[];
}
