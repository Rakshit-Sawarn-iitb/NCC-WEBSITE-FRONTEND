import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function Register() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [rollno, SetRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState<boolean | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isFormFilled = rollno !== '' && password !== '' && name !== '';
  function submitSignUp() {
    client
      .post("/api/active/register/", {
        cadet: name,
        username: rollno,
        password: password,
      })
      .then(function (res) {
        setCurrentUser(true);
        console.log(name);
        console.log(rollno);
        console.log(password);
      });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register With Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Roll Number</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => {
                  SetRollNo(e.target.value);
                }}
                value={rollno}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='d-flex flex-column align-items-center justify-content-center'>
                <Button variant="primary" disabled={!isFormFilled} onClick={submitSignUp}>
                    Register
                </Button>
          <div>Alerady have an account?<span> Login</span></div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;