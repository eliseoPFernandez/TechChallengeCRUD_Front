import React from 'react';
import Home from './components/Home';
import List from './components/Book_List';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      {/* Navbar personalizada */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand href="/" className="display-6 fw-bold text-uppercase">
            Livraria
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/' className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/list' className="mx-2">
                Lista de livros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conteúdo das páginas */}
      <Container className="mt-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
