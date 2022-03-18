import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./styles.css";
import Footer from "./components/Footer";
import Destino from "./components/Destino";
import Promocao from "./components/Promocao";
import ContatosList from "./ContatosList";
import Contato from "./components/Contato";
import AddContato from "./components/AddContato";
import Contatos from "./Contatos";
import Cliente from "./components/Cliente";
import Carrinho from "./components/Carrinho";





const App = () => {
  return (
    <div className="App">
      
      <ToastContainer />
      <Navbar />

      <Route exact path="/" component={() => <Home/>} />
      <Route  path= "/contatos/:id" render={({match}) => (<Contatos id={match.params.id}/>)} />
      <Route  path="/add" component={() => <AddContato/>} />
      <Route  path="/Contato" component={() => <Contato/>} />
      <Route  path="/contatos" component={() => <ContatosList/>} />
      <Route  path="/Cliente" component={() => <Cliente />} />
      <Route  path="/Destino" component={() => <Destino />} />
      <Route  path="/Promocao" component={() => <Promocao />} />
      <Route  path="/Carrinho" component={() => <Carrinho />} />

      <Footer/>


    </div>
  );
};
export default App;
