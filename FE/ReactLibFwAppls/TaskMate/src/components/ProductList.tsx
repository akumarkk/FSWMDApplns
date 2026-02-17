import React, { useEffect } from 'react'

export default function ProductList() {

  const [products, setProducts] = React.useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:8300/products?stock=15")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log("ProductList rendered", products.length, "products")
      });
    // console.log("ProductList rendered", products.length, "products")
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      console.log("**ProductList rendered", products.length, "products");
    }
  }, [products]);

  return (
    <div>ProductList</div>
  )
}
