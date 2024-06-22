interface Props {
  theme: string;
}

function Motto({ theme }: Props) {
  return (
    <div className="d-flex px-5" style={{color:theme==='light'?'black':'white', fontFamily:'Raleway'}}>
      <div>
        The need for having motto for the Corps was discussed in the 11th
        Central Advisory Committee (CAC) meeting held on 11 Aug 1978. The mottos
        suggested were “Duty and Discipline”; “Duty, Unity and Discipline”;
        “Duty and Unity”; “Unity and Discipline”. The final decision for
        selection of “Unity and Discipline” as motto for the NCC was taken in
        the 12th CAC meeting held on 12 Oct 1980.
      </div>
    </div>
  );
}

export default Motto;
