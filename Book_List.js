import React from "react";
import { Table, Button, Modal, Form, Container, Row, Col } from "react-bootstrap";
import addBook from "./Add_Book";
import editBook from "./Edit_Book";
import deleteBook from "./Delete_Book";

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Nome: '',
      Autor: '',
      Editora: '',
      livros: [],
      editandoId: null,
      showModal: false,
    };
  }

  componentDidMount() {
    this.buscarLivro();
  }

  buscarLivro = () => {
    fetch("http://localhost:3000/livros")
      .then((resposta) => resposta.json())
      .then((dados) => {
        this.setState({ livros: dados });
      })
      .catch((error) => console.log("Erro ao buscar os livros:", error));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { Nome, Autor, Editora, editandoId } = this.state;
    const livro = { Nome, Autor, Editora };

    if (editandoId) {
      editBook(editandoId, livro).then(() => {
        this.buscarLivro();
        this.setState({ Nome: '', Autor: '', Editora: '', editandoId: null });
        this.handleClose();
      });
    } else {
      addBook(livro).then(() => {
        this.buscarLivro();
        this.setState({ Nome: '', Autor: '', Editora: '' });
        this.handleClose();
      });
    }
  };

  editarLivro = (livro) => {
    this.setState({
      Nome: livro.Nome,
      Autor: livro.Autor,
      Editora: livro.Editora,
      editandoId: livro._id,
      showModal: true,
    });
  };

  deletarLivro = (id) => {
    deleteBook(id).then(() => {
      this.buscarLivro();
    });
  };

  handleClose = () => this.setState({ showModal: false, editandoId: null });
  handleShow = () => this.setState({ showModal: true, Nome: '', Autor: '', Editora: '', editandoId: null });

  renderTabela() {
    return (
      <Table striped bordered hover className="shadow-sm mt-3">
        <thead className="bg-primary text-white">
          <tr>
            <th>Id do Livro</th>
            <th>Nome</th>
            <th>Autor</th>
            <th>Editora</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {this.state.livros.map((livro) => (
            <tr key={livro._id}>
              <td>{livro._id}</td>
              <td>{livro.Nome}</td>
              <td>{livro.Autor}</td>
              <td>{livro.Editora}</td>
              <td>
                <Button variant="outline-warning" onClick={() => this.editarLivro(livro)} style={{ marginRight: "10px" }}>
                  Editar
                </Button>
                <Button variant="outline-danger" onClick={() => this.deletarLivro(livro._id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return (
      <Container>
        <Row className="my-4">
          <Col className="text-center">
            <h2 className="display-4">Lista de Livros</h2>
          </Col>
        </Row>
        {/* Botão para adicionar um novo livro */}
        <Row>
          <Col className="text-end mb-3">
            <Button variant="success" onClick={this.handleShow} className="shadow-sm">
              Adicionar Livro
            </Button>
          </Col>
        </Row>

        {/* Modal para adicionar ou editar o livro */}
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.editandoId ? "Editar Livro" : "Adicionar Livro"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome do Livro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do livro"
                  name="Nome"
                  value={this.state.Nome}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAutor">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do autor"
                  name="Autor"
                  value={this.state.Autor}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEditora">
                <Form.Label>Editora</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite o nome da editora"
                  name="Editora"
                  value={this.state.Editora}
                  onChange={this.handleInputChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 shadow-sm">
                {this.state.editandoId ? "Atualizar Livro" : "Adicionar Livro"}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        {/* Tabela de livros */}
        {this.renderTabela()}
      </Container>
    );
  }
}

export default BookList;
