import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import './RootComp.css'
import Header from './components/Header'
import ProductList from './components/ProductList';
import Home from './components/Home';
import Footer from './components/Footer';

const RootComp = () => {
    return (
        <>
        <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<div>About Page</div>} />
                <Route path="/contact" element={<div>Contact Page</div>} />
                <Route path="/products" element={<ProductList></ProductList>} />
            </Routes>
            <Footer></Footer>
            
        </>

    );

};

export default RootComp;