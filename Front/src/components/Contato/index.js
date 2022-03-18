import React from "react";
import ContatosList from "../../ContatosList";
import NavContato from "../NavContato";



const Contato = () => {
  return (
   
    <div className="container">
  <div>
    <NavContato></NavContato>
    <ContatosList></ContatosList>
    </div>
    </div>
  
 
  );
};

export default Contato;
