import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces';

@Component({
  selector: 'app-speed-dial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speed-dial.component.html',
  styleUrls: ['./speed-dial.component.scss'],
})
export class SpeedDialComponent implements OnInit {
  @Input() items!: Item[];

  currentItem!: Item;
  show: boolean = false;

  ngOnInit(): void {
    this.items.forEach((item) => {
      if (item.itemDefault) {
        this.currentItem = item;
      }
    });
  }

  onToggle(): void {
    this.show = !this.show;
  }

  onCommand(item: Item): void {
    this.currentItem = item;
    this.show = !this.show;

    item.command();
  }
}
