import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
})
export class CreateItemComponent {
  item = { name: '', description: '', price: null };

  constructor(private readonly itemService: ItemService) {}

  onSubmit() {
    this.itemService.createItem(this.item).subscribe({
      next: (response) => {
        console.log('Item criado:', response);
        alert('Item criado com sucesso!');
        this.item = { name: '', description: '', price: null }; // Limpa o formulário
      },
      error: (error) => {
        console.error('Erro ao criar item:', error);
        alert('Erro ao criar item. Tente novamente!');
      },
    });
  }
}