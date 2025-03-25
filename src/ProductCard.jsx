const PrductCard = ({ title, price, description, image }) => {
  return (
    <div clasName="product-card">
      <img
        src={image}
        alt={title}
        className="product-image"
      />
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <p>{descriptin}</p>
    </div>
  );
}
