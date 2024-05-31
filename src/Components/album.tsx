import * as React from 'react';
import ImgMediaCard from "./card";
import Social from "./footer";
import "bootstrap/dist/css/bootstrap.css";
import Cover from "./cover";
import '/src/assets/css/album.css'

interface Props{
  theme:string;
}
function Album({theme}:Props) {
  React.useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#000'; // Adjust colors as needed
  }, [theme]);
  return (
    <div>
      <Cover theme={theme}/>
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <h1 className={(theme==='light'?'caps-head-light':'caps-head-dark')}>PHOTO GALLERY</h1>
        <div className={(theme==='light'?'line-light':'line-dark')}></div>
      </div>
      <div className="cards-container">
        <ImgMediaCard
          photo="https://gymkhana.iitb.ac.in/~ncc/photo%20gallery/Training%20GC/cover.jpg"
          content="Training is the core of NCC. It is something which will help you build your personality. The smartness of a cadet reflects out when you train yourselves to be a perfect cadet."
          event="Training"
          theme={theme}
        />
        <ImgMediaCard
          photo="https://gymkhana.iitb.ac.in/~ncc/photo%20gallery/cult%20GC/1.JPG"
          content="Culturals is something that connects your soul to body,helps you explore the fun and joyous,cheerful and revived side of you,boosting you for future endeavours it helps you cherish every moment of your life."
          event="Culturals"
          theme={theme}
        />
        <ImgMediaCard
          photo="https://gymkhana.iitb.ac.in/~ncc/photo%20gallery/sports.jpg"
          event="Sports"
          theme={theme}
          content="The discipline you entrail in sports is the discipline you entrail in life. The way you play, the way you become."
        />
        <ImgMediaCard
          photo="https://gymkhana.iitb.ac.in/~ncc/photo%20gallery/37adv.jpg"
          event="Adventure"
          theme={theme}
          content="NCC cadets are given the opportunity to participate in a host of adventure activities including Mountain Treks and Expeditions, Trekking, Parasailing, Sailing, Scuba Diving, Kayaking, Camel safari etc"
        />
        <ImgMediaCard
          photo="https://gymkhana.iitb.ac.in/~ncc/photo%20gallery/social/2.jpg"
          event="Social"
          theme={theme}
          content="Social works and activities refer to efforts aimed at improving the well-being of individuals, communities, or society as a whole. Engaging in social works and activities can have a positive impact on society and contribute to creating a more equitable and just world."
        />
      </div>
      <Social theme={theme}/>
    </div>
  );
}

export default Album;
