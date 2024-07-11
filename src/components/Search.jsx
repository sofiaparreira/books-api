import React from 'react';

const Search = ({ value, onChange }) => {
  return (
    <input
      placeholder='Pesquise pelo nome do livro ou autor'
      className='w-full py-2 px-4 rounded-lg outline text-white bg-gray-700 outline-none'
      type="search"
      onChange={onChange}
      value={value}
    />
  );
}

export default Search;
