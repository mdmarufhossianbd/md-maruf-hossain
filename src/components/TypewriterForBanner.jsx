"use client"
import { Typewriter } from 'react-simple-typewriter';

const TypewriterForBanner = () => {
    const words = [
        'Building Responsive Web Solutions',
        'Your Vision, My Code – Perfect Harmony.',
        'Turning Ideas into Interactive Designs',
        'Pixel Perfect Web Designs',
        'Enhancing User Experiences',
        'Front-end Development Extraordinaire',
        'Innovative Web Development'
    ]
    return (
        <p className='text-3xl lg:text-5xl mb-20'><Typewriter
            words={words}
            loop={true}
            cursor
            cursorColor='#C961DE'
            cursorStyle='|'
            typeSpeed={150}
            deleteSpeed={80}
            delaySpeed={2000}
        /></p>
    );
};

export default TypewriterForBanner;