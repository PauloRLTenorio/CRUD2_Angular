import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule], // Suporte para *ngFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'CRUD_Angular';
  items: any[] = [];

  constructor(private readonly itemService: ItemService) {}

  ngOnInit() {
    this.itemService.getItems().subscribe({
      next: (data) => {
        console.log('Itens recebidos:', data);
        this.items = data;
      },
      error: (error) => {
        console.error('Erro ao carregar os itens:', error);
      },
    });
  }
}