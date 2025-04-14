import Button from "./Button.jsx";

const Card = ({ image, name, description }) => {
  return (
    <div className="card">
      <img className="card-img" src={image} alt={`${name}'s profile`} />
      <h2 className="the-id">{name}</h2>
      <p className="card-t">{description}</p>
      <Button />
    </div>
  );
};

export default Card;