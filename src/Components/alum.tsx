import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Social from "./footer";
import Cover from "./cover";
import "/src/assets/css/alum.css";
import * as React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Confirm from "./modal";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;
interface Props{
  theme:string;
}

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function Alum({theme}:Props) {
  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
  }, [theme]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [joiningDate, setJoiningDate] = useState("");
  const [passingDate, setPassingDate] = useState("");
  const [achievments, setAchievments] = useState("");
  const [present, setPresent] = useState("");
  const [branch, setBranch] = useState("");
  const [employment, setEmployment] = useState("");
  const [domain, setDomain] = useState("");
  const [work, setWork] = useState("");

  const [currentUser, setCurrentUser] = useState<boolean | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState(false);

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    client
      .post("/api/alum/register/", {
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        address: address,
        gender: gender,
        joiningDate: joiningDate,
        passingDate: passingDate,
        achievments: achievments,
        present: present,
        branch: branch,
        employment: employment,
        domain: domain,
        work: work,
      })
      .then(function (res) {
        setCurrentUser(true);
        console.log(firstName);
        console.log(email);
        console.log(mobile);
      });
  }
  useEffect(() => {
    if (currentUser === true) {
      setShowConfirmation(true);
    }
  }, [currentUser]);
  return (
    <div>
      <div>
        <Cover theme={theme} />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1
            className={theme === "light" ? "caps-head-light" : "caps-head-dark"}
          >
            Alum Registration
          </h1>
          <div className={theme === "light" ? "line-light" : "line-dark"}></div>
        </div>
        <div className="d-flex align-items-center justify-content-center m-3">
          <Form
            className="form-wrapper col-sm-8 d-flex flex-column p-5 justify-content-center"
            style={{
              backgroundColor: theme === "light" ? "white" : "#111111",
              color: theme === "light" ? "black" : "white",
              boxShadow:
                theme === "light"
                  ? "0px 0px 20px rgba(0, 0, 0, 0.235)"
                  : "0px 0px 20px rgba(63, 216, 84, 0.235)",
            }}
            onSubmit={(e) => submitForm(e)}
          >
            <h3 className="d-flex justify-content-center heading mb-4">
              Registration Form
            </h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                value={lastName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                value={mobile}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-mail Id</Form.Label>
              <Form.Control
                type="e-mail"
                placeholder=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                value={address}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter SD or SW"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                value={gender}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => {
                  setJoiningDate(e.target.value);
                }}
                value={joiningDate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Passing Out Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                onChange={(e) => {
                  setPassingDate(e.target.value);
                }}
                value={passingDate}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Achievments in NCC</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setAchievments(e.target.value);
                }}
                value={achievments}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Where are you situated presently?</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setPresent(e.target.value);
                }}
                value={present}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Branch of Study</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
                value={branch}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Employment Status</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setEmployment(e.target.value);
                }}
                value={employment}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                In which domain are you currently working/studying
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setDomain(e.target.value);
                }}
                value={domain}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Please elaborate a little about your study/work
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(e) => {
                  setWork(e.target.value);
                }}
                value={work}
              />
            </Form.Group>
            <Button
              type="submit"
              className={theme === "light" ? "button-light" : "button-dark"}
              onClick={() => setModalShow(true)}
            >
              Jai Hind!
            </Button>
          </Form>
        </div>
        <Social theme={theme} />
      </div>
      <Confirm
        page="/alum"
        theme={theme}
        message="Registration Successful...."
        action="Jai Hind!"
        grad="You are now an Alumni!"
        show={modalShow && showConfirmation}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Alum;
