import http from "../http-common";


class ContatoDataService {
  getAll() {
    return http.get("/contatos");
  }
  get(id) {
    return http.get(`/contatos/${id}`);
  }
  create(data) {
    return http.post("/salvar/", data);
  }
  update(id, data) {
    return http.put(`/editar/${id}`, data);
  }
  delete(id) {
    return http.delete(`/deletar/${id}`);
  }
  deleteAll() {
    return http.delete(`/deletar`);
  }
  findByNome(nome) {
    return http.get(`/contatos?nome=${nome}`);
  }
}
export default new ContatoDataService();