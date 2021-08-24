import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useRef,useContext } from "react";
import TableContext from "../../store/table-context";
const Forms = (props) => {
    const tableCtx = useContext(TableContext)
    const nameRef = useRef()
    const dobRef = useRef()
    const addressRef = useRef()
    const mark1Ref = useRef()
    const mark2Ref = useRef()
    const mark3Ref = useRef()

    const submitHandler = (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const dob = dobRef.current.value
        const address = addressRef.current.value
        const mark1 = mark1Ref.current.value
        const mark2 = mark2Ref.current.value
        const mark3 = mark3Ref.current.value
        const data = {
            name,
            dob,
            address,
            mark1,
            mark2,
            mark3
        }

        if(props.isedit){
            tableCtx.editStudent(props.details.id,data)
        }else{
            tableCtx.addStudent(data)
        }
        props.onHide()
    }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" ref={nameRef} defaultValue={props.isedit ? props.details.name : ''} required/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDOB">
              <Form.Label>DOB</Form.Label>
              <Form.Control type="date" ref={dobRef} defaultValue={props.isedit ? props.details.dob : ''} required />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" ref={addressRef} defaultValue={props.isedit ? props.details.address : ''} required/>
          </Form.Group>
          <Row>
            <Form.Group as={Col} controlId="mark1">
              <Form.Label>Mark 1</Form.Label>
              <Form.Control type="number" placeholder="Enter Mark 1"  min="1" max="100" ref={mark1Ref} defaultValue={props.isedit ? props.details.mark1 : ''} required/>
            </Form.Group>
            <Form.Group as={Col} controlId="mark2">
              <Form.Label>Mark 2</Form.Label>
              <Form.Control type="number" placeholder="Enter Mark 2" min="1" max="100" ref={mark2Ref} defaultValue={props.isedit ? props.details.mark2 : ''} required/>
            </Form.Group>
            <Form.Group as={Col} controlId="mark3">
              <Form.Label>Mark 3</Form.Label>
              <Form.Control type="number" placeholder="Enter Mark 3" min="1" max="100" ref={mark3Ref} defaultValue={props.isedit ? props.details.mark3 : ''} required/>
            </Form.Group>
          </Row>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Forms;
