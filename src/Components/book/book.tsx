interface Props{
    theme:string;
    image:string;
    name:string;
    domain:string;
    achievement:string
}

function Book({theme, image, name, domain, achievement}:Props){
    return(
        <div className="d-flex w-25 align-items-center justify-content-around">
            <img className="img-book" src={image} alt="" />
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h2>{domain}</h2>
                <h6>{name}</h6>
                <h6>{achievement}</h6>
            </div>
        </div>
    );
}

export default Book;