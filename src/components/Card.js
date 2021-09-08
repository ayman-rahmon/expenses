import "./Card.css";

function Card(props) {
  //   const classes = "Card " + props.children;

  return <div className="card">{props.children}</div>;
}

export default Card;
