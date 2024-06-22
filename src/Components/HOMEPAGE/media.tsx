import Intro from "../intro.tsx";


interface Props{
    theme:string;
}

function Media({theme}:Props){
    return(
        <div className="d-flex flex-column align-items-center justify-content-center flex-wrap">
            <Intro name="JUO Prashasti Abojwar" post="Media Head" photo="/src/assets/photos/Prashasti.jpeg" contact="+91 7249890188" theme={theme}/>
            <div className="d-flex align-items-center justify-content-around flex-wrap">
                <Intro name="CSM Adith M Sajeev" post="Design Secretary" contact="+91 9811517535" photo="/src/assets/photos/Jayesh.jpeg" theme={theme}/>
                <Intro name="CPL Mohammad Samiuddin Shafi" post="Design Secretary" photo="/src/assets/photos/Sami.jpg" contact="+91 7986114652" theme={theme}/>
            </div>
        </div>
    );
}

export default Media;