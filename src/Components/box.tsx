import "/src/assets/css/boxopt.css";

interface Props{
    theme:string;
}
export default function BoxOpt({theme}:Props) {
  return (
    <div className={theme==='light'?'options-wrapper-light':'options-wrapper-dark'}>
        <span className="opt-text">Notifications</span>
        <span className="opt-text">Resources</span>
        <span className="opt-text">Know Your Council</span>
    </div>
  );
}
