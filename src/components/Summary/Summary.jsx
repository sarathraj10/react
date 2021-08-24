import { useContext } from "react";
import TableContext from "../../store/table-context";

const Summary = (props) => {
  const tableCtx = useContext(TableContext);
  let total_mark1 = 0,
    total_mark2 = 0,
    total_mark3 = 0,
    grand_total = 0;
  for (let item of props.posts) {
    total_mark1 = total_mark1 + parseInt(item.mark1);
    total_mark2 = total_mark2 + parseInt(item.mark2);
    total_mark3 = total_mark3 + parseInt(item.mark3);
    grand_total = grand_total + parseInt(item.total);
  }

  return (
    <tr>
      <td style={{display : tableCtx.table[0].isShown ? '' : 'none'}}>{''}</td>
      <td style={{display : tableCtx.table[1].isShown ? '' : 'none'}}>{''}</td>
      <td style={{display : tableCtx.table[2].isShown ? '' : 'none'}}>{''}</td>
      <td style={{display : tableCtx.table[3].isShown ? '' : 'none'}}>{''}</td>
      <td style={{display : tableCtx.table[4].isShown ? '' : 'none',fontWeight:"bold"}}>{total_mark1}</td>
      <td style={{display : tableCtx.table[5].isShown ? '' : 'none',fontWeight:"bold"}}>{total_mark2}</td>
      <td style={{display : tableCtx.table[6].isShown ? '' : 'none',fontWeight:"bold"}}>{total_mark3}</td>
      <td style={{display : tableCtx.table[7].isShown ? '' : 'none',fontWeight:"bold"}}>{grand_total}</td>
      <td >{''}</td>
    </tr>
  );
};
export default Summary;
