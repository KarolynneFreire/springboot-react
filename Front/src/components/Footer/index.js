import React from "react";

const Footer = () => {
  return (

    <footer className=" text-center text-white">
    <div className="container p-4">
     
      <section className="mb-4 icone">
        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="bi bi-facebook"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="bi bi-twitter"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="bi bi-google"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="bi bi-instagram"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="bi bi-linkedin"></i></a>

        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
          ><i className="bi bi-youtube"></i></a>
          </section>

          <section className="">
        <form action="">
          <div className="row d-flex justify-content-center">
            <div className="col-auto">
              <p className="pt-2">
                <strong>Seja nosso cliente VIP</strong>
              </p>
            </div>
  
            <div className="col-md-5 col-12">
              <div className="form-outline form-white mb-4">
                <input type="email" id="form5Example21" className="form-control" />
                <label className="form-label" for="form5Example21">Coloque seu Email</label>
              </div>
            </div>
  
            <div className="col-auto btn-solic">
              <button type="submit" className="btn btn-outline-light mb-4 ">
                Solicitar
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className="mb-4">
        <p>
    Cliente VIP é aquele que compra em nossa agência há algum tempo e apresenta um ticket médio elevado. Para identificá-lo, 
            é preciso analisar com minúcia da nossa base de cadastros, verificar a quantidade e frequência de compra,
             os tipos de serciços adquiridos e, principalmente, as cifras gastas por esse consumidor.
        </p>
      </section>

      <div className="text-center p-3">
      © 2021 SUSAN VIAGENS
    </div>

        </div>
        </footer>
  );
};

export default Footer;