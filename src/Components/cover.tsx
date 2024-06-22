import "/src/assets/css/cover.css";

interface Props {
  theme: string;
}
function Cover(Props: Props) {
  return (
    <div className={Props.theme} id="jumbo-container">
      <div className="d-flex flex-column justify-content-center">
        <h5 className="h5">राष्ट्रीय कैडेट कोर आइआइटी बोम्बे</h5>
        <h3 className="h3">National Cadet Corps IIT Bombay</h3>
        <p className="lead">2 Maharashtra Engineers Regiment NCC</p>
      </div>
    </div>
  );
}

export default Cover;
