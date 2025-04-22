
import { users } from "./users";

const FilteredCard = () => {
  return (
    <>
      {users.filter(user => user.skills.includes("React")).map((person, index) => {
      
        const { nam, age, location: { city, contry }, skills: [firstSkill, secondSkill] } = person;

        return (
          <div className="card" key={index}>
            <h3>{nam}</h3>
            <p>Age: {age}</p>
            <p>City: {city}, Country: {contry}</p>
            <p>Skills: {firstSkill}, {secondSkill}</p>
          </div>
        );
      })}
    </>
  );
};

export default FilteredCard;