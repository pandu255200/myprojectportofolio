import React from 'react';

const ScrollToSection = ({ targetId, children, className }) => {
    const handleScroll = () => {
        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn(`Section with ID "${targetId}" not found.`);
        }
    };

    return (
        <div className={className} onClick={handleScroll} style={{ cursor: 'pointer' }}>
            {children}
        </div>
    );
};

export default ScrollToSection;
