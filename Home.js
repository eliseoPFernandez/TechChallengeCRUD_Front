import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="text-center shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '50%' }}>
        <Card.Body>
          <Card.Title className="display-4 mb-3">Bem-vindo à Livraria</Card.Title>
          <Card.Text style={{ fontSize: '18px' }}>
            Explore nossa coleção de livros. Clique no botão abaixo para acessar o acervo e gerenciar os livros disponíveis.
          </Card.Text>
          <Button as={Link} to="/list" variant="primary" size="lg">
            Lista de Livros
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
