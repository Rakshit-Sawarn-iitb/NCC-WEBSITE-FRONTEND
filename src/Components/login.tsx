import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

interface Props {
  onHide: () => void;
  show: boolean;
  setUser: (user: boolean) => void;
}

function Login({ onHide, show, setUser }: Props) {
  const [rollno, setRollno] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const isFormFilled = rollno !== "" && password !== "";

  async function submitLogin() {
    try {
      const res = await client.post("/api/active/login/", {
        username: rollno,
        password: password,
      });

      setUser(true);
      setError(null);
      onHide();

      const items = [
        { key: 'token', value: res.data.token },
        { key: 'userId', value: res.data.userId },
      ];

      const promises = items.map((item) => AsyncStorage.setItem(item.key, item.value));
      await Promise.all(promises);
      console.log(res.data.token);

    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
        setError("Invalid credentials");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  }

  return (
    <Modal show={show} onHide={onHide} centered aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>Login With Your Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Roll Number</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setRollno(e.target.value)}
              value={rollno}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex flex-column align-items-center justify-content-center">
        <Button variant="primary" onClick={submitLogin} disabled={!isFormFilled}>
          Login
        </Button>
        <div>
          Don't have an account?<span> Register</span>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default Login;
