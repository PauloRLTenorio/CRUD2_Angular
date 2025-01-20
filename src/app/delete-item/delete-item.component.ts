import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent {
  @Input() itemId!: number; // Recebe o ID do item para exclusão
  @Output() delete = new EventEmitter<number>(); // Emite o ID do item a ser deletado

  confirmDelete() {
    if (confirm('Tem certeza que deseja excluir este item?')) {
      this.delete.emit(this.itemId);
    }
  }
}