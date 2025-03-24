import { useState } from "react";

const ProfilePic = () => {
    const imageUrl = './src/assets/me.png';

    const handleClick = (e) => {
        const img = e.target;
        img.classList.add("fade-animation");

        // Remove the animation class after it completes (1.2s in this case)
        setTimeout(() => {
            img.classList.remove("fade-animation");
        }, 1200);
    };

    return (
        <img
            className="me"
            onClick={(e) => handleClick(e)}
            src={imageUrl}
            alt="Profile Picture"
        />
    );
};

export default ProfilePic;
