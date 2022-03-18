import React from "react";
import { Link } from "react-router-dom";


const Viagens = () => {
  return (


    <div className="container">
      <div>

      <div className="contanier">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://andrealvescorretordeseguro.com.br/wp-content/uploads/2020/04/unnamed-1.png" class="d-block  anucio"  alt="..."/>
    </div>
  </div>
</div>
    </div>


     <section class="card-container teste">


     <div className="contanieer">
<div className="cardss">
<img className="imagBx" src="https://cdn.getyourguide.com/img/location/5d7f4642ef99f.jpeg/88.jpg"  alt="..."/>

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
          <h4>Orlando <i class="bi bi-arrow-down-left-square"></i></h4>
  <div class="content">
    <br/>
    <p> <b> R$ 2100,00</b></p>
    <Link to="/Carrinho">
    <a  className="btn btn-cad"> Eu quero </a>
     </Link> 
  </div>
  </div>
  </div>
  <div className="contanieer">
<div className="cardss">
  <img className="imagBx" src="https://www.flytap.com/-/media/Flytap/new-tap-pages/destinations/south-america/brazil/recife/recife-banner-mobile-1024x553.jpg"  alt="..."/>

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
          <h4>Recife <i class="bi bi-arrow-down-left-square"></i></h4>
  <div class="content">
    <br/>
    <p> <b> R$ 900,00</b></p>
    <Link to="/Carrinho">
    <a  className="btn btn-cad"> Eu quero </a>
     </Link> 
  </div>
  </div>
  </div>
  <div className="contanieer">
<div className="cardss">
  <img className="imagBx" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/05/parque-beto-carrero-world-capa-10.jpg"  alt="..."/>

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
          <h4>Beto Carrero <i class="bi bi-arrow-down-left-square"></i></h4>
  <div class="content">
    <br/>
    <p> <b>  por R$ 1400,00 </b> </p>
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

export default Viagens;