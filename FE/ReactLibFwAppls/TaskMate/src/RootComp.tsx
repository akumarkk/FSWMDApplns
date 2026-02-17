import './RootComp.css'

const RootComp = () => {
    return (
        <div className="rootcomp">
            <h5>{import.meta.env.DEV ? '🔧 DEV MODE' : '🚀 PROD MODE'}</h5>
            Welcome to react Applications
        </div>
    );

};

export default RootComp;