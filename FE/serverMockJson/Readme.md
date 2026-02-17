###### json server
```
json-server --watch .\db.json --port 3000
```


```
GET /products - Get all products
GET /products?q=keyboard - Search products (full-text search)
GET /products?category=electronics - Filter by category
GET /products?_sort=price&_order=asc - Sort by price
GET /products?_limit=5 - Limit results to 5 items
GET /products/1 - Get product by ID
POST /products - Create new product
PUT /products/1 - Update product
DELETE /products/1 - Delete product
```