import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron p-4 " style={{ backgroundColor: "##f5f5dc" }}>
            <h1 className="display-4 mx-auto ">¡Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                voluptatum ducimus soluta eum iste nulla ut. Est possimus recusandae quisquam,
                obcaecati ipsa enim quis iusto dolores. Aliquam exercitationem voluptas aperiam!</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to Action</a>
        </div>
    );
};

export default Jumbotron;