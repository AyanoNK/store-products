# store-products

Store products API and Frontend

## Steps to run

This project is made to be run with Docker & Docker Compose.
If you have not installed Docker, please follow the instructions [here](https://docs.docker.com/engine/install/).
If you have not installed Docker Compose, please follow the instructions [here](https://docs.docker.com/compose/install/).

Once you have
Once you have those installed, you can run the project with the following command:

```bash
docker-compose build
```

Once the build is complete, you can run the project with the following command:

```bash
docker-compose up
```

Wait for the project to start. You can know if it's finished if you see the following message:

```bash
store-products-frontend-1  | event - compiled client and server successfully in 758 ms (311 modules)
```

After that, you can access the API at [http://localhost:3000](http://localhost:3000).

There is also a small frontend side to this project, which you can access at [http://localhost:3001](http://localhost:3001).

## Requested API endpoints

Following a REST server, JSON is used as the data format.

### Creating a store

```bash
curl -X POST \
  http://localhost:3000/store/ \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Mock Store",
    "url": "mockurl.com"
  }'
```

### Creating a product

Please keep in mind that you need to send the store ID in the request body.

```bash
curl -X POST \
  http://localhost:3000/product/ \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Mock Product",
    "sku": "MOCK-431",
    "inventory_quantity": 100,
    "store": 1
  }'
```

### Listing stores endpoint:

```bash
curl -X GET \
  http://localhost:3000/store/
```

### Listing products endpoint:

```bash
curl -X GET \
  http://0.0.0.0:3000/product/?store_id=[id]
```

### Listing products of a store endpoint:

```bash
curl -X GET \
  http://0.0.0.0:3000/product/?store_id=[store_id]
```

### Creating a store

```bash
curl -X POST \
  http://localhost:3000/store/ \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Store name",
    "address": "Store address"
  }'
```

### Get a specific store by id

```bash
curl -X GET \
  http://localhost:3000/store/[id]
```

### Get a specific product by id

```bash
curl -X GET \
  http://localhost:3000/product/[id]
```

### Update a product's inventory

```bash
curl -X PATCH \
  http://localhost:3000/product/[id]/inventory \
  -H 'Content-Type: application/json' \
  -d '{
    "inventory_quantity": 100
  }'
```
