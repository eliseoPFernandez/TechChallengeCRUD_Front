const deleteBook = (id) => {
    return fetch(`http://localhost:3000/livros/${id}`, { method: "DELETE" })
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Erro ao excluir o livro");
        return resposta.json();
      })
      .catch((error) => console.error("Erro:", error));
  };
  
  export default deleteBook;
  