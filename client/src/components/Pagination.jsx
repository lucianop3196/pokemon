//Componente que renderiza los botones, cuyos eventos ejecutan una función que
//recibe como parámetro firstItemIndex y lastItemIndex

// import { useState } from "react";

function Pagination({ items, quantityXPage, handlePagination }) {
  //   const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(items.length / quantityXPage);
  let pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }
  const objIndex = (pageNumber) => {
    const lastItemIndex = pageNumber * quantityXPage;
    const firstItemIndex = lastItemIndex - quantityXPage;
    return { lastItemIndex, firstItemIndex };
  };

  return (
    <>
      {pageNumbers?.map((pageNumber) => {
        const { firstItemIndex, lastItemIndex } = objIndex(pageNumber);
        return (
          <button
            onClick={() => {
              return handlePagination(firstItemIndex, lastItemIndex);
            }}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        );
      })}
    </>
  );
}

export default Pagination;
