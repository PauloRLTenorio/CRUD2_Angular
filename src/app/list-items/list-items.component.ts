import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  title = 'CRUD_Angular';
  items: any[] = [];

  constructor(private readonly itemService: ItemService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getAllItems().subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (error) => {
        console.error('Erro ao carregar os itens:', error);
      },
    });
  }
}