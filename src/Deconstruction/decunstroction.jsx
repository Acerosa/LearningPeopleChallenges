import { users } from "./users";

const Deconstruction = () => {
  return (
    <>
      {users.map((person, index) => {
        
        const { nam, age, location: { city, contry, zip }, profile, skills: [first, second, third] } = person;

        return (
          <div className="card" key={index}>
            <h3>{nam}</h3>
            <p>Age: {age}</p>
            <p>City: {city}, Country: {contry}</p>
            <p>Skills: {first} & {second}</p>
          </div>
        )
      })}
    </>
  )
}

export default Deconstruction