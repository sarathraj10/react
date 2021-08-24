import { useContext, useState } from "react";
import TableContext from "../../store/table-context";
import Form from "../Form/Form";
const TableRow = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const tableCtx = useContext(TableContext);
  const { id, name, address, dob, mark1, mark2, mark3, total } = props.details;
  const deleteHandler = (id) => {
    tableCtx.removeStudent(id);
  };
  return (
    <>
      <Form
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="Edit Student Details"
        details={props.details}
        isedit ={1}
      />
      <tr>
        <td dangerouslySetInnerHTML={{__html :id}} style={{display : tableCtx.table[0].isShown ? '' : 'none'}}/>
        <td dangerouslySetInnerHTML={{__html :name}} style={{display : tableCtx.table[1].isShown ? '' : 'none'}}/>
        <td dangerouslySetInnerHTML={{__html :address}} style={{display : tableCtx.table[2].isShown ? '' : 'none'}}/>
        <td dangerouslySetInnerHTML={{__html :dob}} style={{display : tableCtx.table[3].isShown ? '' : 'none'}}/>
        <td style={{display : tableCtx.table[4].isShown ? '' : 'none'}}>{mark1}</td>
        <td style={{display : tableCtx.table[5].isShown ? '' : 'none'}}>{mark2}</td>
        <td style={{display : tableCtx.table[6].isShown ? '' : 'none'}}>{mark3}</td>
        <td dangerouslySetInnerHTML={{__html :total}} style={{display : tableCtx.table[7].isShown ? '' : 'none'}}/>
        <td>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            style={{ color: "blue" }}
            onClick={() => {
              setModalShow(true);
            }}
          >
            <i className="material-icons">&#xE254;</i>
          </a>
          {/* eslint-disable-next-line */}
          <a
            href="#"
            style={{ color: "red" }}
            onClick={() => {
              if (
                window.confirm("Are you sure to delete this student record?")
              ) {
                deleteHandler(id);
              }
            }}
          >
            <i className="material-icons">&#xE872;</i>
          </a>
        </td>
      </tr>
    </>
  );
};
export default TableRow;
