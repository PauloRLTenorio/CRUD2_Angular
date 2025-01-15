# Resumo do Desenvolvimento do CRUD Angular

## 1. Criação do Projeto Angular
**Comando:**

    ```bash
    ng new CRUD_Angular
    ```

    Arquivos Gerados:
    Todos os arquivos básicos de um projeto Angular. O foco inicial foi no app.component.ts e app.component.html.

2. Evolução e Histórico dos Arquivos

    app.component.ts

    1ª Versão (Criação pelo Angular CLI)

    ```ts
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    })
    export class AppComponent {
    title = 'CRUD_Angular';
    }
    ```

2ª Versão (Alteração para integrar o backend)

    ```ts
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
            this.items = data;
        },
        error: (error) => {
            console.error('Erro ao carregar os itens:', error);
        },
        });
    }
    }
    ```
    Alterações:
        1.	Adicionada a importação do ItemService para buscar os itens.
        2.	Implementado o OnInit para inicializar a requisição ao backend.
        3.	Declarada a variável items para armazenar os itens recebidos.

    app.component.html

1ª Versão (Criação pelo Angular CLI)

    ```html
    <div style="text-align:center">
    <h1>
        Welcome to {{ title }}!
    </h1>
    </div>
    ```
    2ª Versão (Alteração para exibir os itens)
    ```html
    <div class="container">
    <h1>{{ title }}</h1>
    <h2>Itens recebidos do backend:</h2>
    <ul>
        <li *ngFor="let item of items">
        {{ item.id }} - {{ item.name }} - {{ item.description }} - R$ {{ item.price }}
        </li>
    </ul>
    </div>
    ```
    Alterações:
        1.	Substituído o conteúdo básico pelo uso do *ngFor para iterar sobre a lista de itens.
        2.	Exibidas as propriedades id, name, description e price de cada item.

item.service.ts

1ª Versão (Após geração do serviço)

    ```ts
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';

    @Injectable({
    providedIn: 'root',
    })
    export class ItemService {
    private readonly apiUrl = 'http://127.0.0.1:8000/api/items';

    constructor(private readonly http: HttpClient) {}

    getItems(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
    }
    ```

2ª Versão (Alteração para processar a resposta do backend)

    ```ts
    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable } from 'rxjs';
    import { map } from 'rxjs/operators';

    @Injectable({
    providedIn: 'root',
    })
    export class ItemService {
    private readonly apiUrl = 'http://127.0.0.1:8000/api/items';

    constructor(private readonly http: HttpClient) {}

    getItems(): Observable<any[]> {
        return this.http.get<any>(this.apiUrl).pipe(
        map((response) => response.data)
        );
    }
    }
    ```

    Alterações:
        1.	Adicionado o operador map para acessar diretamente a propriedade data na resposta do backend.
        2.	Retorno alterado para Observable<any[]> para refletir corretamente o tipo de dados.

    app.config.ts

1ª Versão (Criação pelo Angular CLI)

    ```ts
    import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
    import { provideRouter } from '@angular/router';

    import { routes } from './app.routes';

    export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
    ],
    };
    ```
    2ª Versão (Alteração para adicionar o HttpClient)

    ```ts
    import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
    import { provideRouter } from '@angular/router';
    import { provideHttpClient } from '@angular/common/http';

    import { routes } from './app.routes';

    export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(),
    ],
    };
    ```

    Alterações:
        •	Adicionado o provideHttpClient() para configurar o HttpClient como provider global.

3. Fluxo Geral

    ```bash
    app.config.ts
    |
    |-- Configura o HttpClient para uso global.
    |
    item.service.ts
    |
    |-- Faz a requisição HTTP para o backend e retorna os dados.
    |
    app.component.ts
    |
    |-- Consome o serviço para obter os itens e disponibilizá-los ao template.
    |
    app.component.html
    |
    |-- Exibe os dados recebidos do backend.
    ```
4. Resumo Final

    Este projeto Angular implementa um CRUD básico que:
        1.	Configura o Angular para consumir dados do backend (Laravel).
        2.	Utiliza boas práticas de organização (serviços e componentes).
        3.	Integra lógica (TypeScript) e exibição (HTML) para exibir dados do backend.

Este material pode ser usado como guia para aprender conceitos fundamentais de Angular, como serviços, templates e configuração global.

