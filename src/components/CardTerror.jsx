import React from "react";
import booksData from "../../json/terrorbooks.json";

const CardBook = () => {
  return (
    <div className="grid grid-cols-2 justify-around mx-auto">
      {booksData.map((book, id) => (
        <div
          className="bg-gray-800 px-4 rounded-md flex justify-left mx-8 mb-8 gap-4 items-center"
          key={id}
        >
          <img className="h-96 px-4 py-4" src={book.capa} alt="" />
          <div>
            <h1 className="text-xl font-bold mb-8 text-center mt-4">
              {book.nome}
            </h1>

            <p className="py-1.5">
              <sapan className="font-medium pr-2">Editora:</sapan>
              {book.editora}
            </p>
            <p className="py-1.5">
              <sapan className="font-medium pr-2">Autor:</sapan>
              {book.autor}
            </p>

            <p className="py-1.5">
              <sapan className="font-medium pr-2">Sinopse:</sapan>
              {book.sinopse}
            </p>
            <p className="py-1.5">
              <sapan className="font-medium pr-2">Minha Avaliação:</sapan>
              {book.estrelas}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardBook;
