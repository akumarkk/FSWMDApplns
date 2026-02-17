import React, { useEffect } from 'react'
import './productList.css'

export default function ProductList() {

  const [products, setProducts] = React.useState<string[]>([]);
  const [url, setUrl] = React.useState<string>("http://localhost:8300/products");

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        console.log("ProductList rendered", products.length, "products")
      });
    // console.log("ProductList rendered", products.length, "products")
  }, [url]);

  useEffect(() => {
    if (products.length > 0) {
      console.log("**ProductList rendered", products.length, "products");
    }
  }, [products]);

  return (
    <div>ProductList
        <button type="button" onClick={() => setUrl("http://localhost:8300/products?in_stock=true")}>In Stock Only</button>
        <button type="button" onClick={() => setUrl("http://localhost:8300/products")}>All</button>

<p>{products.length} products loaded</p>
      <section>
        {
          products.map(p => {
            return <div className='card' key={p.id}>
              <p>{p.name}</p>
              <p>
                <span>{p.price}</span>
                <span>{p.in_stock}</span>
              </p>
            </div>
          })
        }
        
      </section>
    </div>
  )
}
