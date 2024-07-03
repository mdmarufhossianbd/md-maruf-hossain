import Link from "next/link";
import { CiPhone, CiUser } from "react-icons/ci";
import { FaFacebook, FaGithub, FaLaptopCode, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-[#cccccc2a] text-black py-10">
            <div>
                <div className="flex lg:gap-5 md:gap-3 gap-2 justify-center items-center flex-col md:flex-row text-white">
                    <Link className="flex items-center gap-2 lg:text-2xl md:text-xl" href={'/'}><IoHomeOutline />Home</Link>
                    <Link className="flex items-center gap-2 lg:text-2xl md:text-xl" href={'#about'}><CiUser />About Me</Link>
                    <Link className="flex items-center gap-2 lg:text-2xl md:text-xl" href={'#skills'}><FaLaptopCode />Skills</Link>
                    <Link className="flex items-center gap-2 lg:text-2xl md:text-xl" href={'#projects'}><MdWeb />Projects</Link>
                    <Link className="flex items-center gap-2 lg:text-2xl md:text-xl" href={'#contact'}><CiPhone />Contact</Link>
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="text-3xl flex justify-center gap-3 py-10">
                        <Link href={'https://www.facebook.com/mdmarufhossain.bangladesh'} target="_blank" className="flex items-center gap-2"><FaFacebook className="text-[#1877F2] bg-white rounded-full" /></Link>
                        <Link href={'https://x.com/mdmarufh974'} target="_blank" className="flex items-center gap-2 bg-white rounded"><FaSquareXTwitter className="text-[#24292E]" /></Link>
                        <Link href={'https://www.linkedin.com/in/md-maruf-hossain-bd'} target="_blank" className="flex items-center gap-2"><FaLinkedin className="text-[#0077B5] bg-white rounded" /></Link>
                        <Link href={'https://github.com/mdmarufhossianbd'} target="_blank" className="flex items-center gap-2"><FaGithub className="text-[#24292E] bg-white rounded-full" /></Link>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default Footer;