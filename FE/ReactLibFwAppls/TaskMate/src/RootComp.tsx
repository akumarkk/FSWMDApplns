const RootComp = () => {
    return (
        <div className="root">
            <h5>{import.meta.env.DEV ? '🔧 DEV MODE' : '🚀 PROD MODE'}</h5>
            Welcome to react Applications
        </div>
    );

};

export default RootComp;