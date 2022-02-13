//Componente que renderiza los botones, y les asocia un evento para modificar el estado local de pokemonContainer
import { useState } from "react";
import {
  wrapperPagination,
  pagination,
  pagination__item,
  pagination__link,
  is_active,
} from "../styles/Buttons.module.css";

function Pagination({ items, quantityXPage, handlePagination }) {
  //handlePagination, función que setea la currentPage de mi container
  const [activePage, setActivePage] = useState(1); //Estado para manejar el style del botón.

  //Bluce for me genera cantidad de botones que necesito
  const pages = Math.ceil(items.length / quantityXPage);
  let pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={wrapperPagination}>
      <ul className={pagination}>
        {pageNumbers?.map((pageNumber) => {
          return (
            <li className={pagination__item} key={pageNumber}>
              <button
                className={`${pagination__link} ${
                  pageNumber === activePage ? is_active : ""
                }`}
                onClick={() => {
                  setActivePage(pageNumber);
                  return handlePagination(pageNumber);
                }}
              >
                {pageNumber}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Pagination;

export const objIndexPagination = (pageNumber, quantityXPage) => {
  const lastItemIndex = pageNumber * quantityXPage;
  const firstItemIndex = lastItemIndex - quantityXPage;
  return { lastItemIndex, firstItemIndex };
};
