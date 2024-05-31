import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import '/src/assets/css/footer.css';
interface Props{
    theme:string;
}
function Social(Props:Props){
    const dynamicClass = (Props.theme==='light')? 'footer-light':'footer-dark';
    return(
        <div id="jumbo-footer" className={`justify-content-center flex-column ${dynamicClass}`}>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <div className="add d-flex flex-column col-sm-4" >
                    <span style={{fontSize:'x-large', fontWeight:600}}>National Cadet Corps IIT Bombay</span>
                    <span style={{fontSize:'1.25rem', fontWeight:300}}>2 Maharashtra Engineers Regiment</span>
                    <span style={{fontSize:'1.25rem', fontWeight:300}}>Main Gate Road, IIT Bombay, Powai</span>
                    <span style={{fontSize:'1.25rem', fontWeight:300}}>Mumbai, Maharashtra-400076</span>
                    <br />
                    <br />
                    <span style={{fontSize:'1.25rem', fontWeight:300}}>Mob. No.:<a className="links" href="https://api.whatsapp.com/send?phone=+919168549278" target="_blank">+91 9168549278</a></span>
                    <span style={{fontSize:'1.25rem', fontWeight:300}}>Email:<a className="links" href="mailto:ncc@iitb.ac.in" id="email" target="_blank">ncc@iitb.ac.in</a></span>
                </div>
                <iframe className="map col-sm-10" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3769.4129858281976!2d72.9110429!3d19.1333914!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f635211803%3A0x9c003bb65361421!2sNCC%202%20MAH%20ENGR%20REGT!5e0!3m2!1sen!2sin!4v1715180415311!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='d-flex col-xl-12 justify-content-around align-items-center mb-4 mt-5 flex-fill'>
                <a href="https://www.facebook.com/2MahaEngReg" target="_blank" rel="noopener noreferrer"><FacebookIcon fontSize='large' sx={{color:'white'}}/></a>
                <a href="https://www.instagram.com/ncc_iit_bombay/" target="_blank" rel="noopener noreferrer"><InstagramIcon fontSize='large' sx={{color:'white'}}/></a>
                <a href="https://www.youtube.com/channel/UCA2zkmZE-hQbKrnzhjZzDgA" target="_blank" rel="noopener noreferrer"><YouTubeIcon fontSize='large' sx={{color:'white'}}/></a>
                <a href="https://twitter.com/NCC_IIT_Bombay" target="_blank" rel="noopener noreferrer"><XIcon fontSize='large' sx={{color:'white'}}/></a>
                <a href="https://in.linkedin.com/company/ncc-iit-bombay" target="_blank" rel="noopener noreferrer"><LinkedInIcon fontSize='large' sx={{color:'white'}}/></a>
            </div>
        </div>
    );
}

export default Social;