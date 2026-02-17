import React, { useEffect } from 'react'
import './productList.css'

export default function ProductList() {

  const [products, setProducts] = React.useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:8300/products")
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
    <div>ProductList


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
