import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
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

function Logout({ onHide, show, setUser }: Props) {
  const handleLogout = async () => {
    try {
      // Retrieve the token from AsyncStorage
      const token = await AsyncStorage.getItem('token');

      if (token) {
        console.log('Token found:', token);

        // Send the logout request with the token in the header
        const response = await client.post(
          '/api/active/logout/',
          {},
          {
            headers: {
              'Authorization': `Token ${token}`
            }
          }
        );

        if (response.status === 200) {
          console.log('Successfully logged out');

          // Clear user data, token, etc.
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('userId');
          setUser(false); // Update user state to false
          onHide(); // Close the modal
        }
      } else {
        console.error('No token found');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('Logout error:', error.response.data);
      } else {
        console.error('Logout error:', (error as Error).message);
      }
    }
  };

  return (
    <Modal
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>LOGOUT</h4>
        <p>
          Are you sure you want to logout?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleLogout}>Logout</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Logout;
