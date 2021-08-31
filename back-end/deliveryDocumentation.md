# API DELIVERY DOCS

- - -
>**`POST /login`** 
```
Efetuando o login recebe — um e-mail valido e uma senha de no minemo 6 dígitos.
{
  "email": "email",
  "password": "senha"
}

retorna
- status 200 - ok
{
  "name": "nome do usuario",
  "email": "email",
  "role": "customer",            
  "token": "um token valido"
}

- status 400 - Not Found
{
  "message": "Not found"
}
```
- - -
>**`POST /register`** 
```
Registrando um usuário recebe — um e-mail valido e uma senha de no minemo 6 dígitos e um user name.
{
  "userName": "nome do usuario",
  "email": "email",
  "password": "senha"
}

retorna
- status 201 - created
{
  "name": "o nome",
  "email": "o email",
  "role": "customer",             
  "token": "um token valido"
}

- status 409 - Conflict
{
  "message": "Email already registered"
}
```
- - -
>**`GET /products`** 
```
Buscando todos os produtos recebem — um token valido pelo Header Authorization.


retorna
- status 200 - ok
[
  {
    "id": 1,
    "name": "nome do produto",
    "price": "valor",
    "url_image": "enderço da imagem.jpg"
  },
  {
    "id": 2,
    "name": "nome do produto",
    "price": "valor",
    "url_image": "enderço da imagem.jpg"
  }
]
```
- - -
>**`GET /images/"image_name.jpg"`** 
```
Buscando imagem do produto pelo nome recebe — um token valido pelo Header Authorization.

retorna
- status 200 - ok
A imagem
```
- - -
>**`POST /sale`** 
```
Registrando uma venda recebe — um token valido pelo Header Authorization e no body id do vendedor, preço total,
endereço do delivery, numero do delivery, um array de produtos que contem, produtos com id do produto e quantidade.
{
  "userId": 3,
  "sellerId": 2,
  "totalPrice": 11,
  "deliveryAddress": "rua dois",
  "deliveryNumber": "casa 5",
  "products": [
    {
      "id": 1,
      "quantity": 1
    },
    {
      "id": 5,
      "quantity": 7
    }
  ]
}

retorna
- status 201 - created
{
  "saleId": 3
}
```
- - -
>**`GET /sale`** 
```
Buscando todos as vendas ou compras recebendo — um token valido pelo Header Authorization.

retorna
- status 200 - ok
[
  {
    "id": 1,
    "userId": 3,
    "sellerId": 2,
    "totalPrice": "11",
    "deliveryAddress": "rua onde Judas perdeu as botas",
    "deliveryNumber": "1",
    "saleDate": "2021-08-28T05:28:42.000Z",
    "status": "Entregue",
    "user_id": 3,
    "seller_id": 2,
    "user": {
      "id": 3,
      "name": "Cliente Zé Birita",
      "email": "zebirita@email.com",
      "role": "customer"
    },
    "seller": {
      "id": 2,
      "name": "Fulana Pereira",
      "email": "fulana@deliveryapp.com",
      "role": "seller"
    },
    "product": [
      {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2",
        "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg",
        "salesProduct": {
          "quantity": 5
        }
      }
    ]
  },
  {
    "id": 2,
    "userId": 3,
    "sellerId": 2,
    "totalPrice": "11",
    "deliveryAddress": "rua dois",
    "deliveryNumber": "casa 5",
    "saleDate": "2021-08-28T05:53:30.000Z",
    "status": "Pendente",
    "user_id": 3,
    "seller_id": 2,
    "user": {
      "id": 3,
      "name": "Cliente Zé Birita",
      "email": "zebirita@email.com",
      "role": "customer"
    },
    "seller": {
      "id": 2,
      "name": "Fulana Pereira",
      "email": "fulana@deliveryapp.com",
      "role": "seller"
    },
    "product": [
      {
        "id": 1,
        "name": "Skol Lata 250ml",
        "price": "2",
        "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg",
        "salesProduct": {
          "quantity": 1
        }
      },
      {
        "id": 2,
        "name": "Heineken 600ml",
        "price": "8",
        "url_image": "http://localhost:3001/images/heineken_600ml.jpg",
        "salesProduct": {
          "quantity": 1
        }
      },
      {
        "id": 5,
        "name": "Skol 269ml",
        "price": "2",
        "url_image": "http://localhost:3001/images/skol_269ml.jpg",
        "salesProduct": {
          "quantity": 7
        }
      }
    ]
  },
]
```
- - -
>**`GET /sale/id`** 
```
Buscando a venda ou compra pelo saleId recebendo — um token valido pelo Header Authorization.

retorna
- status 200 - ok
{
  "id": 3,
  "userId": 3,
  "sellerId": 2,
  "totalPrice": "11",
  "deliveryAddress": "rua dois",
  "deliveryNumber": "casa 5",
  "saleDate": "2021-08-28T08:28:08.000Z",
  "status": "Pendente",
  "user_id": 3,
  "seller_id": 2,
  "user": {
    "id": 3,
    "name": "Cliente Zé Birita",
    "email": "zebirita@email.com",
    "role": "customer"
  },
  "seller": {
    "id": 2,
    "name": "Fulana Pereira",
    "email": "fulana@deliveryapp.com",
    "role": "seller"
  },
  "product": [
    {
      "id": 1,
      "name": "Skol Lata 250ml",
      "price": "2",
      "url_image": "http://localhost:3001/images/skol_lata_350ml.jpg",
      "salesProduct": {
        "quantity": 1
      }
    },
    {
      "id": 5,
      "name": "Skol 269ml",
      "price": "2",
      "url_image": "http://localhost:3001/images/skol_269ml.jpg",
      "salesProduct": {
        "quantity": 7
      }
    }
  ]
}
```
- - -
>**`PUT /sale/status`** 
```
Atualizando status da venda ou compra recebe — um token valido pelo Header Authorization e o id da venda e o status
pelo body.
{
  "saleId": 1,
  "status": "Entregue"                   --- o status pode variar entre "Preparando" "Em Trânsito" "Entregue" 
}

retorna
- status 200 - ok
{
  "message": "Entregue"
}
```
- - -
>**`GET /sellers`** 
```
Buscando todos os vendedores recebem — um token valido pelo Header Authorization.


retorna
- status 200 - ok
[
  {
    "id": 2,
    "name": "Fulana Pereira"
  },
  {
    "id": 6,
    "name": "leao"
  }
]
```
- - -