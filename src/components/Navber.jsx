import Link from "next/link";

const Navber = () => {
    
    const navLinks = [
        {
            titile: 'Home',
            path: '/'
        },
        {
            titile: 'About',
            path: '#about'
        },
        {
            titile: 'Portfolio',
            path: '#portfolio'
        },
        {
            titile: 'Skills',
            path: '#skills'
        },
        {
            titile: 'Contact',
            path: '#contact'
        },

    ]
    return (
        <div className="flex items-center justify-between max-w-7xl mx-auto py-5 xl:px-0 lg:px-5">
            <Link href={'/'} className="text-3xl font-semibold">Md <span className="text-[#C961DE]">Maruf</span> Hossain</Link>
            <div className="flex lg:gap-2 xl:gap-4 items-center justify-center">

                {
                    navLinks.map((nav, index) => <Link className="border-b-2 hover:border-b-2 hover:border-[#C961DE] rounded-full xl:px-5 lg:px-3 xl:py-2 lg:py-1" key={index} href={nav.path}>{nav.titile}</Link>)
                }
                <Link className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] px-5 py-2 rounded-full ml-10  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300" href={'https://drive.google.com/file/d/1c4hwEwCs6kRP41Jp8oX8Cy3mg3-zi6pm/view?usp=sharing'} target="_blank">Download Resume</Link>
            </div>

        </div>
    );
};

export default Navber;