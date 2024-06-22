import Card from "react-bootstrap/Card";
import AOS from "aos";
import { useEffect } from "react";
interface Props{
    theme:string;
}

function Regiment({theme}:Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div style={{color:theme==='light'?'black':'white', fontFamily:'Raleway'}} className="px-5">
      The 2 Maharashtra Engineers Regiment is a National Cadet Corps unit under
      the aegis of Bombay Engineer Group. NCC IIT Bombay intents at developing
      patriotism, brotherhood and discipline in the cadets, thereby creating
      dynamic and visionary leaders of future India. NCC IIT Bombay strives to
      fulfil the following aims:
      <div className="d-flex align-items-center justify-content-around flex-wrap">
        <Card style={{ width: "18rem", marginBottom:'1rem', marginTop:'1rem', height:'13rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
          <Card.Body>
            <Card.Title>Leadership Qualities</Card.Title>
            <Card.Text>
              Create a human resource of organized, trained and motivated youth,
              to provide leadership in all walks of life and be always available
              for the service of the nation.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginBottom:'1rem', marginTop:'1rem', height:'13rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
          <Card.Body>
            <Card.Title>Personality Development</Card.Title>
            <Card.Text>
              Develop character, comradeship, discipline, leadership, secular
              outlook, the spirit of adventure, and ideals of selfless service
              amongst the youth of the country.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", marginBottom:'1rem', marginTop:'1rem', height:'13rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
          <Card.Body>
            <Card.Title>Motivation</Card.Title>
            <Card.Text>
              Provide a suitable environment to motivate the youth to take up a
              career in the armed forces.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Regiment;
