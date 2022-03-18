import React, { Component } from "react";
import ContatoDataService from "./servicos/contatoservice";
import { Link } from "react-router-dom";

export default class ContatosList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchNome = this.onChangeSearchNome.bind(this);
    this.retrieveContatos = this.retrieveContatos.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveContato = this.setActiveContato.bind(this);
    this.removeAllContatos = this.removeAllContatos.bind(this);
    this.searchNome = this.searchNome.bind(this);
    this.state = {
      contatos: [],
      currentContato: null,
      currentIndex: -1,
      searchNome: ""
    };
  }
  componentDidMount() {
    this.retrieveContatos();
  }
  onChangeSearchNome(e) {
    const searchNome = e.target.value;
    this.setState({
      searchNome: searchNome
    });
  }
  retrieveContatos() {
    ContatoDataService.getAll()
      .then(response => {
        this.setState({
          contatos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  refreshList() {
    this.retrieveContatos();
    this.setState({
      currentContato: null,
      currentIndex: -1
    });
  }
  setActiveContato(contato, index) {
    this.setState({
      currentContato: contato,
      currentIndex: index
    });
  }
  removeAllContatos() {
    ContatoDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }
  searchNome() {
    ContatoDataService.findByNome(this.state.searchNome)
      .then(response => {
        this.setState({
          contatos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { searchNome, contatos, currentContato, currentIndex } = this.state;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar por nome"
              value={searchNome}
              onChange={this.onChangeSearchNome}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchNome}
              >
                Procurar

              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de Contatos</h4>
          <ul className="list-group">
            {contatos &&
              contatos.map((contato, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveContato(contato, index)}
                  key={index}
                >
                  {contato.nome}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllContatos}
          >
            Deletar todos
          </button>
        </div>
        <div className="col-md-6">
          {currentContato ? (
            <div>
              <h4>Contatos</h4>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {currentContato.nome}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentContato.email}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentContato.publicado ? "Publicado" : "Pendente"}
              </div>
              <Link
                to={"/contatos/" + currentContato.id}
                className="badge badge-warning"
              >
                Editar
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Porfavor, selecione um contato</p>
            </div>
          )}
        </div>
      </div>
    );
  }
  }
