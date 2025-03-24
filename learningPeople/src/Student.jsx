import PropTypes from 'prop-types';

const Student = (props) => {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Nationality: {props.nationality}</p>
            <p>Student: {props.isStudent ? "This is a student" : "Not a student"}</p>
        </div>
    );
};

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    nationality: PropTypes.string,
    isStudent: PropTypes.bool,
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    nationality: "From there",
    isStudent: false,
};

export default Student;
