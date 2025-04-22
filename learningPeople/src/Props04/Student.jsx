import PropTypes from 'prop-types';
import './index.css'

const Student = ({
    name = "Guest",
    age = 0,
    nationality = "From there",
    isStudent = false
}) => {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Nationality: {nationality}</p>
            <p>Student: {isStudent ? "This is a student" : "Not a student"}</p>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    nationality: PropTypes.string,
    isStudent: PropTypes.bool,
};

export default Student;
