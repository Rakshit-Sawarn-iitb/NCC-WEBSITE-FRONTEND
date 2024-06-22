import Card from "react-bootstrap/Card";
import '/src/assets/css/home.css'
import AOS from "aos";
import { useEffect } from "react";


interface Props{
    theme:string;
}
function Why({theme}:Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-evenly px-5">
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem', fontFamily:'Raleway'}} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/salute.jpg" />
        <Card.Body>
          <Card.Title>We Salute</Card.Title>
          <Card.Text>
            "A thoughtful mind when it sees the national flag, sees not the
            flag, but the nation itself." - Henry Ward Beecher The trademark of
            NCC IITB is giving the rarest opportunities to its cadets. NCC
            bestows the providential opportunity of saluting the flag twice a
            year, on Independence Day and Republic Day. The cadets also get a
            chance to give the coveted Guard of Honour to the higher rank
            officers of defense forces. When cadets pass by the flag, with
            uniform and ceremonials put on, the heartbeats synchronize with the
            beats of the march past, the salute becoming a reflex and eyes of
            the audience on them, there is no better feeling than that!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/fire.jpg" />
        <Card.Body>
          <Card.Title>We Fire</Card.Title>
          <Card.Text>
            "One man with a gun can control 100 without one." - Vladimir Lenin A
            proximal relation with firearms is a thrilling luxury that isn't
            quite affordable for any general college student. But for NCC
            cadets, it's just one of the many perks of being part of the
            organisation. During the Annual Training Camp, all the cadets savour
            first hand experience of firing rounds from a deluxe or a sporting
            rifle of a caliber around 5.56mm after being trained by an army
            personnel. After initial briefing, every year the cadets are taken
            to the Pokhran firing range where most of them, for the very first
            time in their lives get to experience the sheer thrill of physically
            feeling the vibrations of a rifle's recoil.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/march.jpg" />
        <Card.Body>
          <Card.Title>We March</Card.Title>
          <Card.Text>
            "कन्धों से मिलते हैं कंधे कदमों से कदम मिलते हैं, हम चलते हैं जब ऐसे
            तो दिल दुश्मन के हिलते हैं" Drills are about the whole unit. They
            are about competing to become the best while uplifting everyone else
            to do better. Drills teach us that unity is everything, and
            discipline is foremost. At NCC IITB, students are trained in drills
            by their seniors in sessions that take place once a week. All the
            hard work churns out brilliant contingents that march in perfect
            synchronization in one of the grandest events in the Institute, the
            Republic Day Parade. Several other opportunities like the Training
            GC are provided where cadets can display their marching skills.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/celebrate.jpg" />
        <Card.Body>
          <Card.Title>We Celebrate</Card.Title>
          <Card.Text>
            "The more you praise and celebrate your life, the more there is in
            life to celebrate". - Oprah Winfrey We always try to cherish and
            celebrate all the possible moments to maintain a happy environment
            in the organization. Festivals like Dussehra, Diwali, Lohri,
            Makarsankranti, Holi and many more are celebrated with full fledged
            preparation and enthusiasm. The celebrations are kept open for all
            the people of insti who in turn always participate with full zest.
            The best thing about these celebrations is that they make lives
            richer and more full by allowing us to relax and unwind.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/Compete.jpeg" />
        <Card.Body>
          <Card.Title>We Compete</Card.Title>
          <Card.Text>
            "The important thing in life is not to triumph, but to compete." -
            Pierre de Coubertin Competition is the real world and those who have
            talent or work the hardest, become successful. Competitions are an
            integral part of NCC. Various GCs are organized like Cult GC, Sports
            GC and Training GC throughout the year which keep cadets
            sufficiently involved to learn and grow new potentialities and
            skills. During ATC, cadets compete in cult, sports, debates and
            training with students of other colleges as well which is quite an
            opportunity for students in insti.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/contribute.jpg" />
        <Card.Body>
          <Card.Title>We Contribute</Card.Title>
          <Card.Text>
            The wise person doesn't ask, "What have I achieved?" but rather,
            "What have I contributed?" - Marianne Williamson In order to bring a
            change, it is not enough to just be compassionate, it is imperative
            to act. Quite aware of this fact, we collectively contribute for
            social welfare by volunteering in various independently organised
            events as well as the ones partnered with Abhyuday, the social body
            of IIT Bombay. We provide Career Counseling to the underprivileged
            kids, participate in clean campus initiatives and independently
            organized an institute wide donation drives at the time of Diwali.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/perform.jpg" />
        <Card.Body>
          <Card.Title>We Perform</Card.Title>
          <Card.Text>
            “The earth is my stage and the sun is my spotlight” -Joshua Teya We
            believe that performing arts plays a vital role in developing
            confidence, creativity and bonding among students. Several events
            are organised for cadets where they show their talents in an
            environment of healthy competition. Every year, the three companies
            compete in the Cultural General Championship, wherein cadets from
            each company battle in genres like dance, music, theater, lifestyle,
            fine arts and literary arts. The GC is an amazing opportunity for
            students to be creative and explore the genres of their interest.
            Apart from this, a cultural event is also organized in the Annual
            Training Camp to encourage cadets to perform together.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/play.jpg" />
        <Card.Body>
          <Card.Title>We Play</Card.Title>
          <Card.Text>
            “Do you know what my favorite part of the game is? The opportunity
            to play.” -Michael Singletary Sports are an integral part of the
            year long curriculum. Cadets are given an opportunity to explore and
            pursue a sport of their liking wherein they are trained by
            professional coaches of Gymkhana IIT Bombay in sessions that take
            place once a week. The sports available this year were Kho Kho,
            Volleyball, Basketball, Cricket, Hockey, Football and Badminton.
            Apart from that, various sports events like the Informal battle of
            Companies and Sports General Championship are organized over the
            year to give students the chance to excel in the sport as well as
            bond with their teammates.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "20rem", height:'48rem', marginBottom:'1rem' }} bg={theme==='light'?'light':'dark'} text={theme==='light'?'dark':'white'} border={theme==='light'?'primary':'success'} data-aos="fade-up">
        <Card.Img variant="top" src="/src/assets/photos/tour.jpg" />
        <Card.Body>
          <Card.Title>We Tour</Card.Title>
          <Card.Text>
            "Because the greatest part of the journey isn't arriving at your
            destination, it's the wild stuff in between" Whether it be a
            challenging trek to the highest peak of Maharashtra, an overnight
            camping followed by water sports at the sun kissed beaches of
            Shrivardhan or an exciting 40 km cycling trip to Marine Drive, we
            make sure that the oozing wanderlust inside all the exuberant
            freshmen is aptly satisfied. Even here a cadet gets fair sense of
            eliteness among the students of the institute because they get to
            visit military establishments otherwise not so approachable by
            everyone, a recent one being the visit to the deck of INS
            Brahmaputra and getting first person view of the best guided missile
            frigate of the Indian Navy!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Why;
