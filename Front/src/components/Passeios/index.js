import React from "react";
import { Link } from "react-router-dom";

const Passeios = () => {
  return (

<div className="container">

<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://documents.iatiseguros.pt/products/67ba3d36-9f64-4584-bd20-1802aa7627ea/images/Anual_Multiviaje_grande.jpg" class="d-block w-100 carroseel"  alt="..."/>
    </div>
  </div>
</div>

<div>
     <section class="card-container teste ">

<div className="contanieer">
<div className="cardss">
  <img className="imagBx" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2017/01/lisboa-portugal-capa-1-820x430.jpg"  alt="..."/>

  <section class="mb-4 icone center teste4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-youtube"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-google"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i></a>
          </section>
          <h4>Lisboa <i class="bi bi-arrow-down-left-square"></i></h4>
  <div class="content">
    <br/>
    <p> <b> R$ 3000,00</b></p>
    <Link to="/Carrinho">
    <a  className="btn btn-cad"> Eu quero </a>
     </Link> 
  </div>
  </div>
  </div>

  <div className="contanieer">
<div className="cardss">
  <img className="imagBx" src="https://assistentedeviagem.com.br/blog/wp-content/uploads/2021/02/Coreia-do-Sul-1280x720.png"  alt="..."/>

  <section class="mb-4 icone center teste4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-youtube"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-google"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i></a>
          </section>
          <h4>Coreia do Sul <i class="bi bi-arrow-down-left-square"></i></h4>
  <div class="content">
    <br/>
    <p> <b> R$ 5700,00</b></p>
    <Link to="/Carrinho">
    <a  className="btn btn-cad"> Eu quero </a>
     </Link> 
  </div>
  </div>
  </div>

  <div className="contanieer">
<div className="cardss">
  <img className="imagBx" src="https://www.essemundoenosso.com.br/wp-content/uploads/2020/03/quantos-dias-em-cancun-01.jpg"  alt="..."/>

  <section class="mb-4 icone center teste4">
        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-youtube"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-google"></i></a>

        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i></a>
          </section>
          <h4>Cancún <i class="bi bi-arrow-down-left-square"></i></h4>
  <div class="content">
    <br/>
    <p> <b> R$ 2300,00</b></p>
    <Link to="/Carrinho">
    <a  className="btn btn-cad"> Eu quero </a>
     </Link> 
  </div>
  </div>
  </div>

  
  </section>

    </div>
  </div>

 );
};

export default Passeios;