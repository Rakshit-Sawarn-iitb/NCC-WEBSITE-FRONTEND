interface Props{
    theme:string;
}

function Pledge({theme}:Props) {
  return (
    <div style={{color:theme==='light'?'black':'white', fontFamily:'Raleway'}} className="px-5">
      WE THE CADETS OF THE NATIONAL CADET CORPS, DO SOLOEMNLY PLEDGE THAT WE
      SHALL ALWAYS UPHOLD THE UNITY OF INDIA. WE RESOLVE TO BE DISCIPLINED AND
      RESPONSIBLE CITIZEN OF OUR NATION. WE SHALL UNDERTAKE POSITIVE COMMUNITY
      SERVICE IN THE SPIRIT OF SELFLESSNESS AND CONCERN FOR OUR FELLOW BEINGS.
    </div>
  );
}

export default Pledge;
