import './RootComp.css'
import Header from './components/Header'

const RootComp = () => {
    return (
        <div className="rootcomp">
            <Header />
            <h5>{import.meta.env.DEV ? '🔧 DEV MODE' : '🚀 PROD MODE'}</h5>
            Welcome to react Applications
        </div>
    );

};

export default RootComp;