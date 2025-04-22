

const UserCardFilter = ({ name, age, location: { city, country }, skills }) => {
    return (
      <div className="card">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>From: {city}, {country}</p>
        <p>Skills: {skills.join(", ")}</p>
      </div>
    );
  };
  
  export default UserCardFilter;