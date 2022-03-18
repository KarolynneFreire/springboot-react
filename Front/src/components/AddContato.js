import React, { Component } from "react";
import ContatoDataService from "../servicos/contatoservice";



export default class AddContato extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.saveContato = this.saveContato.bind(this);
    this.newContato = this.newContato.bind(this);
    this.state = {
      id: null,
      nome: "",
      email: "", 
      publicado: false,
      submetido: false
    };
  }
  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  saveContato() {
    var data = {
      nome: this.state.nome,
      email: this.state.email
    };
    ContatoDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          nome: response.data.nome,
          email: response.data.email,
          publicado: response.data.publicado,
          submetido: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newContato() {
    this.setState({
      id: null,
      nome: "",
      email: "",
      publicado: false,
      submetido: false
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submetido ? (
          <div>
            <h4>Adicionado com sucesso!</h4>
            <button className="btn btn-success" onClick={this.newContato}>
              Adicionar
            </button>
          </div>
        ) : (
          <div>
            <h2>Cadastre-se</h2>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                required
                value={this.state.nome}
                onChange={this.onChangeNome}
                name="nome"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>
            <button onClick={this.saveContato} className="btn btn-success">
              Salvar
            </button>
          </div>
        )}
      </div>
    );
  }
}