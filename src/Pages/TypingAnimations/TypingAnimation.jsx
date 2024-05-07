// @ts-nocheck
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function TypingAnimation({ title }) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        const animate = () => {
            if (currentIndex < title.length) {
                setDisplayedText((prev) => prev + title[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
                timeout = setTimeout(animate, 300); // Typing speed
            } else {
                timeout = setTimeout(() => {
                    setDisplayedText("");
                    setCurrentIndex(0);
                }, 1500); // Delay before restarting
            }
        };

        animate();

        return () => clearTimeout(timeout);
    }, [title, currentIndex]);

    return <span>{displayedText}</span>;
}

TypingAnimation.propTypes = {
    title: PropTypes.string.isRequired,
};

export default TypingAnimation;
