import './Card.scss';

export const Card = (props) => {
  return <div className={`card ${props.classes}`}>{props.children}</div>;
};
