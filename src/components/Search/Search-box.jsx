import { useContext } from 'react'; 
import TableContext from "../../store/table-context";
import classes from './Search-box.module.css'
const Search = () => {
  const tableCtx = useContext(TableContext)
  const searchHandler = (e) => {
    const str = e.target.value
    tableCtx.filter(str)
  }
  return (
    <div className={classes["search-box"]}>
      <i className="material-icons">&#xE8B6;</i>
      <input
        type="text"
        className={classes["form-control"]}
        placeholder="Search&hellip;"
        value = {tableCtx.search}
        onChange = {searchHandler}
      ></input>
    </div>
  );
};
export default Search;
