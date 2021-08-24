import { Container, Row, Col,Button } from "react-bootstrap";
import { useState,useContext } from "react";
import TableContext from "../../store/table-context";
import classes from "./Header.module.css";
import Form from "../Form/Form";
import ColumnToggle from "../Form/ColumnToggle";

const Header = () => {
  const tableCtx = useContext(TableContext)
  const [modalShow, setModalShow] = useState(false);
  const [toggleShow,setToggleShow] = useState(false)

  const clickHandler = () => {
    setModalShow(true)
  }
  const toggleHandler = () => {
    setToggleShow(true)
  }
  const resetHandler = () => {
    tableCtx.reset()
  }
  return (
    <>
    <ColumnToggle show={toggleShow} onHide={() => setToggleShow(false)}/>
    <Form show={modalShow} onHide={() => setModalShow(false)} title="Add Student Details" isedit= {0}/>
    <Container fluid className="p-0">
      <Row>
        <Col  className="p-0" md={8}>
          <header className={classes.title}>
            <h1>React-DataTable</h1>
          </header>
        </Col>
        <Col  className="p-0" md={4}>
          <div className={classes.buttons}>
          <Button variant="success" onClick={clickHandler}>+ Add</Button>
          <Button variant="success" onClick={toggleHandler}>Column Toggle</Button>
          <Button variant="secondary" onClick={resetHandler}>Reset</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Header;
