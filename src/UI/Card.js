import './Card.css';

export const Card = (props) => {
  return <div className={`card ${props.classname}`}>{props.children}</div>;
};
