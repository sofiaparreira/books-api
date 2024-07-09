import React from "react";
import booksData from "../../json/books.json";

const CardBook = ({ filterParam }) => {
  const getFilteredLivros = () => {
    return booksData.slice().sort((a, b) => {
      if (filterParam === "A-Z") {
        return a.nome.localeCompare(b.nome);
      } else if (filterParam === "Z-A") {
        return b.nome.localeCompare(a.nome);
      } else {
        return 0;
      }
    });
  };

  const filteredBooks = filterParam ? getFilteredLivros() : booksData;

  return (
    <div className="grid grid-cols-3 justify-around mx-auto">
      {filteredBooks.map((book, id) => (
        <div
          className="bg-gray-800 py-4 px-4 rounded-md flex justify-left mx-8 mb-8 gap-4"
          key={id}
        >
          <img className="rounded w-40" src={book.capa} alt="" />
          <div>
            <h1 className="text-xl font-bold mb-8 text-center mt-4">
              {book.nome}
            </h1>

            <p className="py-1.5">
              <span className="font-medium pr-2">Editora:</span>
              {book.editora}
            </p>
            <p className="py-1.5">
              <span className="font-medium pr-2">Autor:</span>
              {book.autor}
            </p>

            <p className="py-1.5">
              <span className="font-medium pr-2">Categoria:</span>
              {book.categoria}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBook;
