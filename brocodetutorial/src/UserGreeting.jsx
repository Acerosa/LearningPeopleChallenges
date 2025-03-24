import PropTypes from "prop-types";

const UserGreeting = (props) => { // Fixed arrow function syntax
   
    const wellcome = <h2 className="greeting">Welcome {props.username} </h2> 
    const wellcome2 = <h2 className="greeting2">User is not logged in </h2> 
     return (props.isLoggedIn ? wellcome: wellcome2 
     )
        
        
};



UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
};

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
};
export default UserGreeting;
