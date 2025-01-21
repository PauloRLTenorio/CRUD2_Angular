import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent implements OnInit {
  item: any = { name: '', description: '', price: null }; // Objeto para edição

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly itemService: ItemService
  ) {}

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id'); // Obtém o ID da rota
    if (itemId) {
      this.itemService.getItemById(Number(itemId)).subscribe({
        next: (data) => {
          this.item = data; // Preenche os campos com os dados do item
        },
        error: (error) => {
          console.error('Erro ao carregar item:', error);
          alert('Erro ao carregar o item. Tente novamente.');
        },
      });
    }
  }

  onSubmit() {
    this.itemService.updateItem(this.item.id, this.item).subscribe({
      next: () => {
        alert('Item atualizado com sucesso!');
        this.router.navigate(['/list']); // Redireciona para a listagem
      },
      error: (error) => {
        console.error('Erro ao atualizar item:', error);
        alert('Erro ao atualizar o item. Tente novamente.');
      },
    });
  }
}