import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron text-center p-5">
            <h1 className="display-4">¡Bienvenido!</h1>
            <p className="lead">Esta es una simple landing page hecha con React.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
        </div>
    );
};

export default Jumbotron;