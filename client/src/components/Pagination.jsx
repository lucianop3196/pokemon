//Componente que renderiza los botones, y les asocia un evento para modificar el estado local de pokemonContainer
import {
  wrapperPagination,
  pagination,
  pagination__item,
  pagination__link,
  is_active,
  prevNextPageBtn,
} from "../styles/Buttons.module.css";

function Pagination({ items, quantityXPage, handlePagination, currentPage }) {
  //handlePagination, función que setea la currentPage de mi container

  //Bluce for me genera cantidad de botones que necesito
  const pages = Math.ceil(items.length / quantityXPage);
  let pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={wrapperPagination}>
      {pageNumbers.length !== 0 && (
        <ul className={pagination}>
          <li className={pagination__item}>
            <button
              className={prevNextPageBtn}
              onClick={() => {
                if (currentPage > 1) return handlePagination(currentPage - 1);
              }}
            >
              {"<< "}
            </button>
          </li>
          {pageNumbers?.map((pageNumber) => {
            return (
              <li className={pagination__item} key={pageNumber}>
                <button
                  className={`${pagination__link} ${
                    pageNumber === currentPage ? is_active : ""
                  }`}
                  onClick={() => {
                    return handlePagination(pageNumber);
                  }}
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          <li className={pagination__item}>
            <button
              className={prevNextPageBtn}
              onClick={() => {
                if (currentPage < pageNumbers.length)
                  return handlePagination(currentPage + 1);
              }}
            >
              {">>"}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Pagination;

export const objIndexPagination = (pageNumber, quantityXPage) => {
  const lastItemIndex = pageNumber * quantityXPage;
  const firstItemIndex = lastItemIndex - quantityXPage;
  return { lastItemIndex, firstItemIndex };
};
