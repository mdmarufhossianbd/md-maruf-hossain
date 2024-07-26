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
            titile: 'Projects',
            path: '#projects'
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
        <div>
            <div className="navbar flex items-center justify-between max-w-7xl mx-auto py-5 xl:px-0 lg:px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <div
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-36 p-2 shadow">
                            {
                                navLinks.map((nav, index) => <Link className="text-black border-b-2 border-[#C961DE] rounded-full text-center  py-1" key={index} href={nav.path}>{nav.titile}</Link>)
                            }
                        </div>
                    </div>
                    <Link href={'/'} className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#C961DE] to-[#3455a7]">Maruf. Hossain</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 flex gap-4">
                        {
                            navLinks.map((nav, index) => <Link className="border-b-2 hover:border-b-2 hover:border-[#C961DE] rounded-full xl:px-5 lg:px-3 xl:py-2 lg:py-1" key={index} href={nav.path}>{nav.titile}</Link>)
                        }
                    </div>
                </div>
                <div className="navbar-end">
                    <Link className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] md:px-5 px-3 py-2 rounded-full ml-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300" href={'https://drive.google.com/file/d/1c4hwEwCs6kRP41Jp8oX8Cy3mg3-zi6pm/view?usp=sharing'} target="_blank">Download Resume</Link>
                </div>
            </div>
        </div>
    );
};

export default Navber;