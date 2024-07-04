import Image from "next/image";
import Link from "next/link";
import img from '../../public/my.jpg';
import TypewriterForBanner from "./TypewriterForBanner";

const Banner = () => {
    
    return (
        <div className="md:flex items-center justify-between max-w-7xl mx-auto my-20">
            <div className="flex flex-col justify-center w-1/2">
                <p className="text-2xl md:text-5xl mb-2">Hi, I'm Md Maruf Hossain, <span className="font-semibold text-[#C961DE]">Professional Frontend Developer</span>.</p>
                <TypewriterForBanner />
                <div className="w-full">
                    <Link className="bg-[#FFFFFF4D] md:px-5 px-3 py-2 rounded-full mr-5" href={'#contact'} >Hire Me</Link>
                    <Link className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] md:px-5 px-3 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300" href={'https://drive.google.com/file/d/1c4hwEwCs6kRP41Jp8oX8Cy3mg3-zi6pm/view?usp=sharing'} target="_blank">Download Resume</Link>
                </div>
            </div>
            <div className="">
                <Image className="rounded-full object-cover w-[500px] h-[500px] border border-red-400" height={500} width={500} src={img} alt="md maruf hossain"/>
            </div>
        </div>
    );
};

export default Banner;