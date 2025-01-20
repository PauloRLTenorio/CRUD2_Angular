import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemService } from '../services/item.service';
import { SearchItemsComponent } from '../search-items/search-items.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchItemsComponent],
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css'],
})
export class ListItemsComponent implements OnInit {
  title = 'CRUD_Angular';
  items: any[] = [];
  searchedItems: any[] = [];
  searchExecuted: boolean = false;
  isSearchActive: boolean = false; // Variável de controle


  constructor(private readonly itemService: ItemService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getAllItems().subscribe({
      next: (data) => {
        this.items = data; // Carrega todos os itens ao carregar a rota
      },
      error: (error) => {
        console.error('Erro ao carregar os itens:', error);
      },
    });
  }


  handleSearch(query: string): void {
    this.searchedItems = this.items.filter((item) => {
      const lowerQuery = query.toLowerCase();
      return (
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.price.toString().includes(lowerQuery)
      );
    });
    this.searchExecuted = true;
  }


}