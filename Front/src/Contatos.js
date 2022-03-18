import React, { Component } from "react";
import ContatoDataService from "./servicos/contatoservice";
import axios from "axios";



export default class Contato extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.getContato = this.getContato.bind(this);
    this.updatePublicado = this.updatePublicado.bind(this);
    this.updateContato = this.updateContato.bind(this);
    this.deleteContato = this.deleteContato.bind(this);
    this.state = {
      currentContato: {
        id: null,
        nome: "",
        email: "",
        publicado: false
      },
      message: ""
    };
  }
  componentDidMount() {
    const id = this.props.id
    this.getContato(id);     
  }


  onChangeNome(e) {
    const nome = e.target.value;
    this.setState(function(prevState) {
      return {
        currentContato: {
          ...prevState.currentContato,
         nome: nome
        }
      };
    });
  }
  onChangeEmail(e) {
    const email = e.target.value;
    
    this.setState(prevState => ({
      currentContato: {
        ...prevState.currentContato,
        email: email
      }
    }));
  }
  getContato(id) {
    ContatoDataService.get(id)
      .then(response => {
        this.setState({
          currentContato: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updatePublicado(status) {
    var data = {
    id: this.state.currentContato.id,
    nome: this.state.currentContato.nome,
    email: this.state.currentContato.email,
    publicado: status
    };

    ContatoDataService.update(this.state.currentContato.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentContato: {
            ...prevState.currentContato,
            publicado: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateContato() {
    ContatoDataService.update(
      this.state.currentContato.id,
      this.state.currentContato
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "Contato atualizado com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteContato() {    
    ContatoDataService.delete(this.state.currentContato.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/Contato')
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { currentContato } = this.state;
    return (
      <div>
        {currentContato ? (
          <div className="edit-form">
            <h4>Contato</h4>
            <form>
              <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  value={currentContato.nome}
                  onChange={this.onChangeNome}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentContato.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentContato.publicado ? "Publicado" : "Pendente"}
              </div>
            </form>
            {currentContato.publicado ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublicado(false)}
              >
                Cancelar publicação
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublicado(true)}
              >
                Publicar
              </button>
            )}
            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteContato}
            >
              Deletar
            </button>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateContato}
            >
              Atualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Clique em um contato...</p>
          </div>
        )}
      </div>
    );
  }
  }
