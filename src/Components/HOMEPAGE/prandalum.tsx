import Intro from "../intro.tsx";

interface Props{
    theme:string;
}

function PRalum({theme}:Props){
    return(
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Intro name="JUO Mohammad Kadiri" post="PR and Alumni Head" photo="/src/assets/photos/Mohammad.jpeg" contact="+91 9833692723" theme={theme}/>
            <div className="d-flex align-items-center justify-content-around flex-wrap">
                <Intro name="SGT Jayesh Nitin Ahire" post="PR and Alumni Secretary" contact="+91 8239240635" photo="/src/assets/photos/Jayesh.jpeg" theme={theme}/>
                <Intro name="CPL Mohammad Samiuddin Shafi" post="PR and Alumni Secretary" photo="/src/assets/photos/Sami.jpg" contact="+91 7986114652" theme={theme}/>
            </div>
        </div>
    );
}

export default PRalum;