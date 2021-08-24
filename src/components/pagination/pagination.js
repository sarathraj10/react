/* eslint eqeqeq: 0 */
import { useContext } from "react";
import TableContext from "../../store/table-context";

const Pagination = ({ postsPerPage, totalPosts }) => {
  const pageNumbers = [];
  const tableCtx = useContext(TableContext);
  const paginateHandler = (number) => {
    tableCtx.paginate({currentPage : number});
  };
  const nextHandler = () => {
    if (pageNumbers.length == tableCtx.pagination.currentPage) return;
    const NextPageNum = tableCtx.pagination.currentPage + 1;
    tableCtx.paginate({currentPage : NextPageNum});
  };
  const prevHandler = () => {
    if (tableCtx.pagination.currentPage == 1) return;
    const prevPageNum = tableCtx.pagination.currentPage - 1;
    tableCtx.paginate({currentPage : prevPageNum});
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination" style={{ float: "right" }}>
        {totalPosts ?<li className="page-item">
          <a
            className="page-link"
            aria-label="Previous"
            href="!#"
            onClick={() => prevHandler()}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li> : ''}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              "page-item " +
              (tableCtx.pagination.currentPage == number ? "active" : "")
            }
          >
            <a
              onClick={() => paginateHandler(number)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
        {totalPosts ? <li className="page-item">
          <a href="!#" onClick={() => nextHandler()} className="page-link">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li> : ''}
      </ul>
    </nav>
  );
};

export default Pagination;
