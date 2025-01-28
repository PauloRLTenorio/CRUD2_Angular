import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-item-button',
  standalone: true,
  templateUrl: './edit-item-button.component.html',
  styleUrls: ['./edit-item-button.component.css'],
})
export class EditItemButtonComponent {
  @Input() itemId!: number; // Recebe o ID do item como entrada

  constructor(private readonly router: Router) {}

  navigateToEdit() {
    this.router.navigate(['/edit', this.itemId]); // Navega para a rota de edição
  }
}
