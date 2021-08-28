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
- - -
- - -
Implementado até o momento a parte de cima - parte de baixo em desenvolvimento.
- - -
- - -
- - -
>**`GET /images/"urg_image.jpg"`** 
```
Buscando imagem do produto recebe — a url da imagem.

retorna
- status 200 - ok
A imagem
```
- - -
>**`POST /sale`** 
```
Registrando uma venda recebe — um token valido pelo Header Authorization, id do vendedor, preço total,
endereço do delivery, numero do delivery, um array de produtos que contem, produtos com id do produto e quantidade.
{
  seller_id,
  total_price,
  delivery_address,
  delivery_number,
  [
    {
    id_product,
    Quantity,
    },
    {
    id_product,
    Quantity,
    }
  ]
}

retorna
- status 201 - created
{
  "sale_id": "id da venda"
}
```
- - -
>**`GET /sales`** 
```
Buscando todos as vendas ou compras de um usuario recebendo — um token valido pelo Header Authorization.


retorna
- status 200 - ok
[
  {
    user_id,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    status,
    [
      {
      id_product,
      Quantity,
      },
      {
      id_product,
      Quantity,
      }
    ]
  },
  {
    user_id,
    seller_id,
    total_price,
    delivery_address,
    delivery_number,
    Status,
    [
      {
      id_product,
      Quantity,
      },
      {
      id_product,
      Quantity,
      }
    ]
  }
]
```
- - -
>**`PUT /sale`** 
```
Atualizando status da venda ou compra recebe — um token valido pelo Header Authorization o id da venda e o status.
{
  sale_id,
  status                     --- o status pode variar entre "Preparando" "Em Trânsito" "Entregue" 
}

retorna
- status 200 - ok
```
- - -
