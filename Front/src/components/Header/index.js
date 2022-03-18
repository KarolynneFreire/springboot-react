import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
     <section className="card-container teste">

<div className="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760483.png"  alt="..."/>
  <div className="card-body">
    <h5 className="card-title center text-card">Contato</h5>
    <Link to="/Contato">
    <a  className="btn btn-cad"> Saiba mais <i className="bi bi-check2-square"></i> </a>
     </Link> 
  </div>
</div>
<div className="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760448.png" alt="..."/>
  <div className="card-body">
    <h5 className="card-title center text-card">Cliente</h5>
    <Link to="/Cliente">
    <a  className="btn btn-cad">Saiba mais <i className="bi bi-check2-square"></i> </a>
    </Link>
  
  </div>
</div>
<div className="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760440.png" alt="..."/>
  <div className="card-body">
    <h5 className="card-title center text-card">Promoções</h5>
    <Link to="/Promocao">
    <a className="btn btn-cad">Saiba mais <i className="bi bi-check2-square"></i> </a>
    </Link>
  </div>
</div>
<div className="card cad">
  <img src="https://cdn-icons-png.flaticon.com/512/4760/4760464.png" alt="..."/>
  <div className="card-body">
    <h5 className="card-title center text-card">Destinos</h5>
    <Link to="/Destino">
    <a className="btn btn-cad">Saiba mais <i className="bi bi-check2-square"></i> </a>
    </Link>
  </div>
</div>
</section>

    <h3>“O que interessa na vida não é prever os perigos das viagens; é tê-las feito.”                 (Agostinho da Silva)</h3>
    </div>
  );
};

export default Header;