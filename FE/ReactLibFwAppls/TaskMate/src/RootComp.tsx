import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import './RootComp.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import ProductList from './components/ProductList';
import Home from './components/Home';
import Footer from './components/Footer';

const RootComp = () => {
    return (
        <div className="rootcomp">
            <Header></Header>
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<ProductList></ProductList>} />
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default RootComp;