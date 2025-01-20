import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {
  @Input() item: any; // Recebe o objeto do item para edição

  onEdit() {
    alert('Função de edição em desenvolvimento para o item: ' + this.item.name);
    // Aqui você pode implementar o modal ou redirecionar para outra rota
  }
}