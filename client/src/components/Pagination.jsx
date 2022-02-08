//Componente que renderiza los botones, y les asocia un evento para modificar el estado local de pokemonContainer

function Pagination({ items, quantityXPage, handlePagination }) {

  //Bluce for me genera cantidad de botones que necesito
  const pages = Math.ceil(items.length / quantityXPage);
  let pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {pageNumbers?.map((pageNumber) => {
        return (
          <button
            onClick={() => {
              return handlePagination(pageNumber);
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

export const objIndex = (pageNumber, quantityXPage) => {
  const lastItemIndex = pageNumber * quantityXPage;
    const firstItemIndex = lastItemIndex - quantityXPage;
    return { lastItemIndex, firstItemIndex };
}
