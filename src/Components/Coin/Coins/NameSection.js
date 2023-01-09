import "./NameSection.css"

const NameSection = (props) => {
    return (
        <div className="name__section">
        <img alt={props.alt} src={props.src} className="coinimg" />
        <span className="name">{props.name}</span>
        <span className="abbr">{props.abbr}</span>
      </div>
    );
}

export default NameSection;