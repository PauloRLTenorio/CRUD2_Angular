import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeleteItemComponent } from '../delete-item/delete-item.component';
import { EditItemButtonComponent } from "../edit-item-button/edit-item-button.component";

@Component({
  selector: 'app-found-items',
  standalone: true,
  imports: [CommonModule, RouterModule, DeleteItemComponent, EditItemButtonComponent],
  templateUrl: './found-items.component.html',
  styleUrls: ['./found-items.component.css'],
})
export class FoundItemsComponent {
  @Input() items: any[] = []; // Lista de itens a serem exibidos
  @Input() searchExecuted: boolean = false; // Controle de busca executada
  @Output() delete = new EventEmitter<number>(); // Evento para exclusão de itens

  onDelete(itemId: number) {
    this.delete.emit(itemId); // Emite o evento para o componente pai
  }
}
