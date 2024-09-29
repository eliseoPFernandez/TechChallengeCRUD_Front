const editBook = (id, livro) => {
    return fetch(`http://localhost:3000/livros/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livro),
    })
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Erro ao atualizar o livro");
        return resposta.json();
      })
      .catch((error) => console.error("Erro:", error));
  };
  
  export default editBook;
  