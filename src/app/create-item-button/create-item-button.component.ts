import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-item-button',
  standalone: true,
  templateUrl: './create-item-button.component.html',
  styleUrls: ['./create-item-button.component.css'],
})
export class CreateItemButtonComponent {
  constructor(private readonly router: Router) {}

  navigateToCreate() {
    this.router.navigate(['/create']); // Redireciona para a rota de criação
  }
}
