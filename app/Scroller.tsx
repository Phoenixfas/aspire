import React, { useState, useEffect } from 'react';


export default function InfiniteAutoScroller() {
    // Define state variables for the scroll position and whether the mouse is hovering
    const [scrollPos, setScrollPos] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
  
    // Define an effect to update the scroll position every 50 milliseconds
    useEffect(() => {
      const interval = setInterval(() => {
        if (!isHovering) {
          setScrollPos((scrollPos) => scrollPos + 1);
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, [isHovering]);
  
    // Define an event handler for when the mouse enters the container
    function handleMouseEnter() {
      setIsHovering(true);
    }
  
    // Define an event handler for when the mouse leaves the container
    function handleMouseLeave() {
      setIsHovering(false);
    }
  
    return (
        <div
            className="infinite-auto-scroller"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="content" style={{ transform: `translateY(-${scrollPos}px)` }}>
            {/* Insert your content here */}
            </div>
        </div>
    );
}
  