import React from "react";


const Comentarios = () => {
  return (

    <div className="container"> 
        <div className ="comentario">
        <div class="card cad-comentario">
  <img src="https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png" alt="..."/>
  <div class="card-body">
    <h5 class="card-title center">ROBERTO SILVA</h5>
    <p class="card-text center">Comentário</p>
    <p class="card-text center"><b>"Melhor experiencia que já tive!"</b></p>
    <section class="mb-4 icone center teste4">
        <a class="btn teste8 btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>
        <a class="btn teste8 btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i></a>
          </section>
  </div>
</div>
<div class="card cad-comentario">
  <img src="https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia-360-2.png" alt="..."/>
  <div class="card-body">
    <h5 class="card-title center">ARTHUR OLIVEIRA</h5>
    <p class="card-text center">Comentário</p>
    <p class="card-text center"><b>"Equipe muito acolhedora, Shooow!!"</b></p>
    <section class="mb-4 icone center teste4">
        <a class="btn teste8 btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>
        <a class="btn teste8 btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i></a>
          </section>
  </div>
</div>

<div class="card cad-comentario">
  <img src="data:image/jpeg;base64,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" alt="..."/>
  <div class="card-body">
    <h5 class="card-title center">GABRIELA GOMES</h5>
    <p class="card-text center">Comentário</p>
    <p class="card-text center"><b>"Viajei sozinha, mas nem parecia!!"</b></p>

    <section class="mb-4 icone center ">
        <a class="btn teste8 btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-facebook"></i></a>
        <a class="btn teste8 btn-floating m-1" href="#!" role="button"
          ><i class="bi bi-instagram"></i></a>
          </section>
  </div>
</div>
      </div>
      </div>
  );
};

export default  Comentarios;