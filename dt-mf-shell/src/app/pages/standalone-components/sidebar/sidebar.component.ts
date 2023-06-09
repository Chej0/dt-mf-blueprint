import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,  MatListModule, MatIconModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() opened!: boolean;
  @Input() menu!: any;
  @Input() currentRoute!: string;


  @Output() routerlink = new EventEmitter<any>();
}
