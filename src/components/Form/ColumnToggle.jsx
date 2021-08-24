import { Modal, Form, Button } from "react-bootstrap";
import { useContext } from "react";
import TableContext from "../../store/table-context";

const ColumnToggle = (props) => {
  const tableCtx = useContext(TableContext);
  const submitHandler = (event) => {
    event.preventDefault();
    let checkedlist = [];
    for (let i = 0; i < 8; i++) {
      checkedlist.push({
        name: event.target[i].id,
        isShown: event.target[i].checked,
      });
    }
    tableCtx.updateColumn(checkedlist)
    props.onHide()
  };
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Select Columns to be displayed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Form.Check inline label="ID" name="group1" id="id" defaultChecked={tableCtx.table[0].isShown}/>
          <Form.Check inline label="Name" name="group1" id="name" defaultChecked={tableCtx.table[1].isShown}/>
          <Form.Check inline label="Address" name="group1" id="adress" defaultChecked={tableCtx.table[2].isShown}/>
          <Form.Check inline label="DOB" name="group1" id="dob" defaultChecked={tableCtx.table[3].isShown}/>
          <Form.Check inline label="Mark1" name="group1" id="mark1" defaultChecked={tableCtx.table[4].isShown}/>
          <Form.Check inline label="Mark2" name="group1" id="mark2" defaultChecked={tableCtx.table[5].isShown}/>
          <Form.Check inline label="Mark3" name="group1" id="mark3" defaultChecked={tableCtx.table[6].isShown}/>
          <Form.Check inline label="Total Marks" name="group1" id="total" defaultChecked={tableCtx.table[7].isShown}/>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onHide}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ColumnToggle;
