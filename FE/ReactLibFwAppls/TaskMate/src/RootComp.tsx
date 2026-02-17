import './RootComp.css'
import Header from './components/Header'
import ProductList from './components/ProductList';

const RootComp = () => {
    return (
        <div className="rootcomp">
            <Header />
            <h5>{import.meta.env.DEV ? '🔧 DEV MODE' : '🚀 PROD MODE'}</h5>
            Welcome to react Applications


            <ProductList />
        </div>
    );

};

export default RootComp;