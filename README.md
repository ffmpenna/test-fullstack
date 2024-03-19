# Teste Fullstack: Aplicativo de Gerenciamento de Clientes

<details>
  <summary>
  <strong> Requisitos do teste </strong> 
  </summary>

## Descrição:

Neste desafio, você deverá desenvolver um aplicativo fullstack que permita aos usuários visualizar e criar clientes. O aplicativo consiste em duas partes: o frontend e o backend. O frontend será responsável pela interface do usuário e a comunicação com a API. O backend será responsável pelo armazenamento e gerenciamento dos dados dos clientes.

## Requisitos do Frontend:

1. Exibir uma listagem de clientes contendo todas as informações conforme o layout fornecido.
2. Permitir a criação de um novo cliente através de um formulário.
3. Na tela de edição, fornecer alertas para o usuário em caso de dados inválidos.
4. Realizar validação de CPF e telefone na tela de edição para garantir dados corretos e consistentes.
5. Comunicar-se com a API para obter os dados dos clientes cadastrados.

## Requisitos do Backend:

Criar uma API que ofereça endpoints para:

1. Obter a listagem de clientes cadastrados.
2. Cadastrar um novo cliente com informações válidas.
3. Atualizar informações de cliente existente.
4. Armazenar os dados do cliente de forma persistente, com sugestão de uso do SQLite para essa finalidade.

## Requisitos de Qualidade de Código:

Escreva um código limpo, legível e bem organizado.
Adote boas práticas de desenvolvimento e arquitetura.

## Itens Desejáveis (opcional):

- Testes unitários
- Bibliotecas ou frameworks adicionais

## Telas:

- [Tela Inicial](https://test-frontend-uolpp.web.app/assets/images/tela-inicial.jpg)
- [Tela de Edição](https://test-frontend-uolpp.web.app/assets/images/tela-edicao.jpg)

## Instruções Finais:

Após concluir o desafio, crie um pull request neste repositório com duas pastas separadas: uma contendo o projeto frontend e outra com o projeto backend, para que possamos avaliar seu trabalho. Boa sorte!

</details>


<details>
  <summary>
    <strong>
    Stacks Utilizadas
    </strong>
  </summary>

  ## Front-end:

  - React
  - Context
  - MaterialUI

  ## Front-end:

  - Node
  - Express
  - Sqlite
  
</details>

<details>

<summary>
  <strong>
 🧑🏻‍💻 Frontend
  </strong>
</summary>

## Telas

### 🖥️ Desktop:

- [Tela Inicial](https://raw.githubusercontent.com/ffmpenna/test-fullstack/master/assets/ClientesDesktop.png)
- [Tela de Edição](https://raw.githubusercontent.com/ffmpenna/test-fullstack/master/assets/FormDesktop.png)

### 📱 Mobile:

- [Tela Inicial](https://raw.githubusercontent.com/ffmpenna/test-fullstack/master/assets/ClientesMobile.png)
- [Tela de Edição](https://raw.githubusercontent.com/ffmpenna/test-fullstack/master/assets/FormMobile.png)

</details>
<details>
  <summary> 
  <strong> 
   🌐 Backend 
  </strong>
  </summary>

## 📄 Documentação da API

### 🔍 Validações

Para manter a consistências dos dados inseridos dentro do DB, foram implementadas algumas validações durante as requisições.

- Não será possível criar um cliente que possúa dados únicos¹ que conflite com um cliente já cadastrado;

- Não será possível atualizar as informações de um cliente caso isso crie conflitos com dados únicos¹ de clientes já cadastrados;

- A api possúi diversas validações de formatação e estrutura de valores de email, CPF e telefone. Sendo possível inseri-los somente se forem válidos;

> ¹ CPF | Email | Telefone

## Métodos
Requisições para a API devem seguir os padrões:
| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |


## Respostas

| Código | Descrição |
|---|---|
| `200` | Requisição executada com sucesso (success).|
| `201` | Dados inseridos com sucesso (success).|
| `400` | Erros de validação ou os campos informados não existem no sistema.|
| `404` | Registro pesquisado não encontrado (Not found).|
| `409` | Informções conflitantes.|
| `422` | Dados informados estão fora do escopo definido para o campo.|

## GET

#### Retorna todos os clientes

```
  GET /
```

#### Retorna um cliente específico

```
  GET /${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do cliente que você quer |

## POST

#### Insere um cliente

```
  POST /create

  request.body: {
    "name": ...,
    "email":...,
    "phone":...,
    "cpf":...,
    "status": ...
  }
```

## PUT

#### Atualiza um cliente

```
  PUT /edit/${id}

  request.body: {
    "name": ...,
    "email":...,
    "phone":...,
    "cpf":...,
    "status": ...
  }
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do cliente que você quer editar |

</details>

## Rodando localmente

1. Instale as dependências na raiz do projeto:

```bash
  npm install
```

2. Instale as dependencias de frontend e de backend:

```bash
  npm run prestart
```  

3. Rode o frontend e o backend simultaneamente:

```bash
  npm start
```
> Se preferir, poderá rodá-los separadamente executando `npm run dev` dentro de suas respectivas pastas raízes.
