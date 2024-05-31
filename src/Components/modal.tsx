import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import "/src/assets/css/modal.css";

interface Props {
  page: string;
  message: string;
  action: string;
  grad: string;
  onHide: () => void;
  show: boolean;
  theme:string;
}

function Confirm({ page, message, action, grad, onHide, show, theme }: Props) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className={theme==='light'?'modal-light':'modal-dark'}/>
      <Modal.Body className={`d-flex flex-column align-items-center justify-content-around ${theme === 'light' ? 'modal-light' : 'modal-dark'}`}>
      <video
            src="src/assets/Animation - 1710744632878.mp4"
            autoPlay
            muted
          ></video>
          <div className="d-flex flex-column align-items-center">
            <h3 className={theme==='light'?'message-light':'message-dark'}>{message}</h3>
            <Card.Text className={theme==='light'?'grad-light':'grad-dark'}>{grad}</Card.Text>
            <Button className={theme==='light'?'button-modal-light':'button-modal-dark'}>
                {action}
            </Button>
          </div>
      </Modal.Body>
    </Modal>
  );
}

export default Confirm;
