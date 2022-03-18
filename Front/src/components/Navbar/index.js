import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-toggleable-sm border-bottom box-shadow mb-3 dp-menu">
  <div className="container-fluid">
  <img className="fotomenu" src="https://images.vexels.com/media/users/3/128176/isolated/preview/4086178bba7e381b9324267248ac78f8-icone-de-viagem-do-ponteiro-de-localizacao.png" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      <i className="bi bi-list"></i>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
                        <Link to="/">
                          <a className="nav-link">Inicio</a>
                          </Link>
          
			              </li>
                    <li className="nav-item">
                        <Link to="/Destino">
                          <a className="nav-link">Destinos</a>
                          </Link>
          
			              </li>
                    <li className="nav-item">
                        <Link to="/Promocao">
                          <a className="nav-link">Promoções</a>
                          </Link>
          
			              </li>
                    <li className="nav-item">
                        <Link to="/Cliente">
                          <a className="nav-link">Clientes</a>
                          </Link>
          
			              </li>
                    <li className="nav-item">
                        <Link to="/Contato">
                          <a className="nav-link">Contatos</a>
                          </Link>
          
			              </li>
                    <li className="nav-item">
                        <Link to="/Carrinho">
                          <a className="nav-link"><i class="bi bi-cart2"></i></a>
                          </Link>
          
			              </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
