//Componente que renderizara todos los botones de filtrado y busqueda
import SearchBtn from "../buttons/SearchBtn";
import Sort from "../buttons/Sort";
import { useSelector } from "react-redux";
import Filters from "../buttons/Filters";
import CreateBtn from "../buttons/CreateBtn";
import styles from "../../styles/NavHome.module.css";
import Swal from "sweetalert2";
function NavHome({
  handleSortAlph,
  handleSortStrength,
  handleTypeFilter,
  handleSourceFilter,
}) {
  const types = useSelector((state) => state.types);

  const sourceOptions = [
    { name: "api", id: 1 },
    { name: "created", id: 2 },
  ];

  return (
    <>
      <ul className={styles.navhome_ul}>
        <li>
          <SearchBtn />
        </li>
        <li>
          <Sort
            handleSort={handleSortAlph}
            sortDescription="Sort alphabetically"
          />
        </li>
        <li>
          <Sort
            handleSort={handleSortStrength}
            sortDescription="Sort by strength"
          />
        </li>
        <li>
          <Filters
            items={types}
            defaultDescription="Filter by type"
            handleFilter={handleTypeFilter}
          />
        </li>
        <li>
          <Filters
            items={sourceOptions}
            defaultDescription="Filter by source"
            handleFilter={handleSourceFilter}
          />
        </li>
        <li>
          <CreateBtn />
        </li>
        <li>
          <button
            className={styles.aboutBtn}
            onClick={() =>
              Swal.fire({
                title: "<strong>Pokemon app</strong>",
                icon: "info",
                html:
                  "<b>Technologies used:</b><br><br> { <b>frontEnd</b>: ['React', 'Redux'],<br>" +
                  "<b>backEnd</b>: ['Node Js', 'Express'],<br>" +
                  "<b>databases</b>: ['Sql', 'Postgres', 'Sequelize'] }",
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: "Thumbs up, great!",
              })
            }
          >
            <i className={`fa fa-question ${styles.question}`}></i>{" "}
          </button>
        </li>
      </ul>
    </>
  );
}

export default NavHome;
