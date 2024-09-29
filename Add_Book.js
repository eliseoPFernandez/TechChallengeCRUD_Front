const addBook = (livro) => {
    return fetch("http://localhost:3000/livros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livro),
    })
      .then((resposta) => {
        if (!resposta.ok) throw new Error("Erro ao adicionar o livro");
        return resposta.json();
      })
      .catch((error) => console.error("Erro:", error));
  };
  
  export default addBook;
  