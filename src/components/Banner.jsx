import Link from "next/link";

const Banner = () => {
    return (
        <div className="flex max-w-7xl mx-auto min-h-screen">
            <div className="flex flex-col justify-center w-1/2">
                <p className="text-2xl md:text-5xl mb-10">Creative UI Designer Sourasith Phomhome Based in Montreal</p>
                <div className="w-full">
                    <Link className="bg-[#FFFFFF4D] md:px-5 px-3 py-2 rounded-full mr-5" href={'https://drive.google.com/file/d/1c4hwEwCs6kRP41Jp8oX8Cy3mg3-zi6pm/view?usp=sharing'} target="_blank">Hire Me</Link>
                    <Link className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] md:px-5 px-3 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300" href={'https://drive.google.com/file/d/1c4hwEwCs6kRP41Jp8oX8Cy3mg3-zi6pm/view?usp=sharing'} target="_blank">Download Resume</Link>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Banner;