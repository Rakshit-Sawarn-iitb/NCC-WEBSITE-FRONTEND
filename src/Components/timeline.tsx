import '/src/assets/css/timeline.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import Intro from './intro';

interface Props {
    theme: string;
}

interface CardProps {
    name: string;
    photo: string;
    post: string;
    contact: string;
    role: number;
    year: number;
}

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function Timeline(Props: Props) {
    const [active, setActive] = useState<number | null>(null);
    const [role, setRole] = useState<number | null>(null);
    const [year, setYear] = useState<number | null>(null);
    const [cardData, setCardData] = useState<CardProps[]>([]);

    const handleClick = (index: number) => {
        setActive(prevActive => prevActive === index ? null : index);
        const newYear = 2024 - index;
        setYear(newYear);
        setRole(null);
    };

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/council/cards")
          .then((res) => {
            console.log(res);
            setCardData(res.data);
          })
          .catch((error) => {
            console.error('Error fetching product data:', error);
          });
      }, []);

    const filteredCardData = cardData.filter(card => card.role === role && card.year === year);

    return (
        <div>
            <div className="years mt-5">
                {[...Array(8)].map((_, index) => (
                    <span
                        key={index}
                        className={active === index ? 'active' : ''}
                        onClick={() => handleClick(index)}
                        style={{
                            backgroundColor: active === index ? (Props.theme === 'light' ? '#003399' : 'rgb(68, 157, 68)') : 'transparent',
                            color: active === index ? (Props.theme === 'light' ? 'white' : 'black') : (Props.theme === 'light' ? '#003399' : 'rgb(68, 157, 68)')
                        }}
                    >
                        {2024 - index}-{25 - index}
                    </span>
                ))}
            </div>
            {active !== null && <div className="d-flex justify-content-around content-wrap mb-3" >
                <div onClick={() => setRole(0)} style={{backgroundColor: role === 0 ? (Props.theme === 'light' ? '#003399' : 'rgb(68, 157, 68)') : 'transparent',
                                color: role === 0 ? (Props.theme === 'light' ? 'white' : 'black') : (Props.theme === 'light' ? '#003399' : 'rgb(68, 157, 68)')}}>Head</div>
                <div onClick={() => setRole(1)} style={{backgroundColor: role === 1 ? (Props.theme === 'light' ? '#003399' : 'rgb(68, 157, 68)') : 'transparent',
                                color: role === 1 ? (Props.theme === 'light' ? 'white' : 'black') : (Props.theme === 'light' ? '#003399' : 'rgb(68, 157, 68)')}}>Secretary</div>
            </div>}
            <div className='d-flex align-items-center justify-content-around flex-wrap'>
                {filteredCardData.map((card, index) => (
                <Intro
                    key={index}
                    name={card.name}
                    photo={card.photo}
                    post={card.post}
                    contact={card.contact}
                    theme={Props.theme}
                />
                ))}
            </div>
        </div>
    );
}

export default Timeline;
