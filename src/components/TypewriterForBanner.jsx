"use client"
import { Typewriter } from 'react-simple-typewriter';

const TypewriterForBanner = () => {
    const words = [
        'Creating Elegant, Efficient, and Effective Web Solutions.',
        'Your Vision, My Code – Perfect Harmony.',
    ]
    return (
        <p className='text-5xl mb-20'><Typewriter
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