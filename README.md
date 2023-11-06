# To do List

## Descrição do Projeto

Este é um projeto de estudo que se trata de uma lista de afazeres, onde pode-se adicionar categorias para criar várias listas diferentes, que foi feito com intuito de treinar React, funções assíncronas, persistência de dados e manipular APIs.

## Tecnologias usadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40" /> 


Esse projeto foi criado com React + Vite (https://pt.vitejs.dev/guide/).

## Começando com React + Vite

Você precisa ter [NPM](https://nodejs.org/en/) instalado para rodar essa aplicação.

#### Clone esse projeto

```
  git clone + url do código
```

#### Entre na pasta

```
  cd sua-pasta
```

#### Instale dependências

```
 npm create vite@latest my-react-app -- --template react
```

#### Para rodar!

```
  npm run dev
```

## Para testar a persistência de dados:

Você precisará rodar o json-server em um terminal separado:

#### Instale o json-server
```
npm install -g json-server

```

#### Crie um arquivo json (como db.json) e adicione categorias e itens iniciais

Exemplo:
```
{
  "categories": [],
  "items": []
}
```

#### Execute o json-server com o nome da sua pasta
 Exemplo:

```
 json-server --watch db.json
```
