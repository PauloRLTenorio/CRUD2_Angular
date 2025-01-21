import { Routes } from '@angular/router';
import { ListItemsComponent } from './list-items/list-items.component';
import { CreateItemComponent } from './create-item/create-item.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // Redireciona a raiz para a rota 'list'
  { path: 'list', component: ListItemsComponent }, // Rota para listagem
  { path: 'create', component: CreateItemComponent }, // Rota para criar item
  { path: '**', redirectTo: 'list' }, // Redireciona rotas inválidas para 'list'
  { path: 'edit/:id', component: EditItemComponent }, // Rota para editar um item
];