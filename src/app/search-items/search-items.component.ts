import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css'],
})
export class SearchItemsComponent {
  @Output() search = new EventEmitter<string>(); // Evento de saída para o termo de pesquisa
  searchQuery: string = '';

  onSearch() {
    this.search.emit(this.searchQuery); // Emite o termo de pesquisa para o componente pai
  }
}