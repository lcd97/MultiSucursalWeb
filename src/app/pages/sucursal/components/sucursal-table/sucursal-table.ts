import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sucursal-table',
  imports: [CommonModule],
  templateUrl: './sucursal-table.html'
})

export class SucursalTableComponent {
  @Input() sucursales: any[] = [];
  @Output() onAction = new EventEmitter<{type: string, data?: any}>();

  showModal(type: string, data?: any) {
    this.onAction.emit({ type, data });
  }
}
