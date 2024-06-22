interface Props{
    theme:string;
}

function Flag({theme}:Props) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center px-5" style={{color:theme==='light'?'black':'white', fontFamily:'Raleway'}}>
      <div>
        <img src="/src/assets/photos/flag.jpg" alt="" />
      </div>
      <div>
        The NCC flag for various units of the NCC was first introduced in 1951.
        The flag was of same pattern, colour and size as was used by various
        regiments of the Army. The only difference was that it had the NCC badge
        and unit designation placed in the centre. Later on it was felt that the
        flag should be in keeping with the inter-service character of the Corps.
        In 1954 the existing tricolour flag was introduced. The three colours in
        the flag depict the three services of the Corps, red for the Army, deep
        blue for the Navy and light blue for the Air Force. The letters NCC and
        the NCC crest in gold in the middle of the flag encircled by a wreath of
        lotus, give the flag a colourful look and a distinct identity.
      </div>
    </div>
  );
}

export default Flag;
