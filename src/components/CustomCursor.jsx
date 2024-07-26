"use client"
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
    return (
        <AnimatedCursor
            innerSize={16}
            outerSize={16}
            color='21, 128, 61'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}           
        />
    );
};

export default CustomCursor;