import React from "react";
import { Link } from "react-router-dom";



const NavContato = () => {
  return (
   
    <div className="container">
<div classNameName="contanier">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.visie.com.br/tritonwp/2022/01/FALE-CONOSCO-1.png" className="d-block w-100 contati"  alt="..."/>
    </div>
  </div>
</div>
    </div>


    <nav className="navbar navbar-expand center nav-cont">
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/contatos"} className="nav-link">
            Lista de contatos
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
           Novo contato +
          </Link>
        </li>
      </div>
    </nav>
    </div>
  );
};

export default NavContato;