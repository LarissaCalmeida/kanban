# Kanban

Kanban é um projeto desenvolvido para a matéria Técnicas de Programação WEB da Faculdade, que foi baseado no desafio do site Front-End Mentor. Ele é um gerenciamento de tarefas para ajudar ao desenvolvedor e demais áreas, a gerenciar suas tarefas e auxiliando a ter noção de tempo e estimativa para finalização de um projeto.  

## Tecnologias e Pré-Requisitos 

- NodeJs
- Next.js
- Styled Components
- React Hook Form


## 📁 Estrutura do Projeto

<aside>

```
├── public (imagens e icones)
│   ├── *.png
│   ├── *.svg
│   ├── *.webp
├── src
│   ├── components (Componentes das páginas)
│   │   ├── [NameComponent]
│   │   |   ├── index.tsx
│   │   |   ├── styles.ts
│   ├── pages (Páginas)
│   │   ├── api (Requisições à API - Backend)
│   │   │   ├── index.tsx
│   │   |   ├── [name_file].tsx
│   │   ├── [name_route_page]
│   │   |   ├── index.tsx
│   │   ├── index.tsx
│   │   ├── _app.tsx 
│   │   ├── _document.tsx 
│   │   ├── 404.tsx 
│   ├── styles (Estilização)
│   │   ├── [name_route_page].tsx
```
</aside>

## Clonando Repositório

```bash
$ git clone git@github.com:LarissaCalmeida/kanban.git
$ cd kanban
```
## Instalação das dependências

Instale as dependências digitando a linha de comando abaixo em seu terminal:
```bash
$ npm install
```

## Rodar
Rode o projeto digitando a linha de comando abaixo em seu terminal:
```bash
$ npm run dev
```
## Funcionalidades 

 - [x] Criação de Novas Colunas
 - [x] Tarefas
	 - [x] Adicionar
	 - [x] Remover
	 - [x] Editar
	 - [x] Atualizar 
	 - [x] Adicionar subtarefas
	 - [x] Atualizar subtarefas
 - [x] Drag and Drop das tarefas (possível arrastar entre as colunas)
 - [x] Responsividade

 

## Bugs e Melhorias para a versão atual

- [ ] Autenticação
	- [ ] Cadastro
	- [ ] Login
	- [ ] Resetar senha
- [ ] Gerenciar Boards
	- [ ] Cadastrar
	- [ ] Atualizar 
	- [ ] Excluir
	- [ ] Listar
	- [ ] Visualizar
- [ ] Gerenciar Colunas
	- [x] Cadastrar
	- [ ] Excluir
	- [ ] Atualizar
	- [x] Visualizar  
- [ ] Ocultar/Mostrar Sidebar
- [ ] Integração com o Back-End

## Bônus para a próxima versão 
- [ ] Modo Light/Dark
- [ ] Modo Team
	- [ ] Adicionar user
	- [ ] Adicionar permissões ao user
	- [ ] Atualizar user
	- [ ] Remover user
	- [ ] Listar users
	- [ ] Mostrar quem criou a task