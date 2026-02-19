import React from 'react'
import ProductList from './ProductList'
import Header from './Header'

export default function Home() {
  return (
    <div className="rootcomp">
                {/* <Header /> */}
                <h5>{import.meta.env.DEV ? '🔧 DEV MODE' : '🚀 PROD MODE'}</h5>
                Welcome to react Applications


                {/* <ProductList /> */}
            </div>
  )
}
