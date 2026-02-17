import React from 'react'

export default function ProductList() {

    const [products, setProducts] = React.useState<string[]>([])

    console.log("ProductList rendered", products.length, "products")
    fetch("http://localhost:8300/products?stock=15")
    .then(response => response.json())
    .then(data => setProducts(data));

  return (
    <div>ProductList</div>
  )
}
