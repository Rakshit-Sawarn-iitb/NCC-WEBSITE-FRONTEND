interface Props{
    theme:string;
}

function Song({theme}:Props){
    return(
        <div className="d-flex flex-column align-items-center justify-content-center" style={{color:theme==='light'?'black':'white', fontFamily:'Raleway'}}>
            <p className="text-center">
                Listen to the Song <a href="https://www.youtube.com/watch?v=K2faLjlM8iY" target="_blank">Here</a>
            </p>
            <p className="text-center">
                Hum Sab Bharatiya Hain, Hum Sab Bharatiya Hain<br/> Apni Manzil Ek Hai,<br/> Ha, Ha, Ha, Ek Hai,<br/>
                Ho, Ho, Ho, Ek Hai.<br/> Hum Sab Bharatiya Hain.<br/>
                <br/> Kashmir Ki Dharti Rani Hai,<br/> Sartaj Himalaya Hai,<br/> Saadiyon Se Humne Isko Apne Khoon Se
                Pala Hai<br/> Desh Ki Raksha Ki Khatir Hum Shamshir Utha Lenge,<br/> Hum Shamshir Utha Lenge.<br/>
                <br/> Bikhre Bikhre Taare Hain Hum Lekin Jhilmil Ek Hai,<br/> Ha, Ha, Ha, Ek Hai<br/> Hum Sab Bharatiya
                Hai.<br/> Mandir Gurudwaare Bhi Hain Yahan<br/> Aur Masjid Bhi Hai Yahan<br/> Girija Ka Hai Ghariyaal
                Kahin<br/> Mullah ki Kahin Hai Ajaan<br/>
                <br/> Ek Hee Apna Ram Hain, Ek hi Allah Taala Hai,<br/> Ek Hee Allah Taala Hain, Raang Birange Deepak
                Hain Hum,<br/> lekin Jagmag Ek Hai, Ha Ha Ha Ek Hai, Ho Ho Ho Ek Hai.<br/> Hum Sab Bharatiya Hain, Hum
                Sab Bharatiya Hain.
            </p>
        </div>
    );
}

export default Song;