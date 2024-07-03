import Link from "next/link";
import { FaKeyboard, FaUser } from "react-icons/fa";
import { MdEmail, MdMarkEmailRead } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiLoginBoxFill } from "react-icons/ri";


const Contact = () => {
    return (
        <div id='contact' className="py-20">
            <div className="bg-[#2F2F8A99] max-w-7xl mx-auto rounded-2xl h-[600px] flex gap-20 p-20 border">
                <div className="w-1/2">
                    <h2 className="text-2xl font-semibold">Get in touch</h2>
                    <p className="text-justify py-5">I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.</p>
                    <div className="mt-20 space-y-10">
                        <div className="flex items-center gap-2">
                            <PiPhoneCallFill className="md:text-6xl bg-white p-2 text-black rounded-full" />
                            <Link href={'tel:+8801723010904'}><p className="text-xl">+8801723-010904</p></Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <MdMarkEmailRead className="md:text-6xl bg-white p-2 text-black rounded-full" />
                            <Link href={'mailto:mdmarufh974@gmail.com'}><p className="text-xl">mdmarufh974@gmail.com</p></Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl font-semibold">Sent me a message</h2>
                    <form className="py-4">
                        <div className="relative mb-4">
                            <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                            <input className="rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="text" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="relative mb-4">
                            <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                            <input className="rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="email" name="email" placeholder="Enter email address" required />
                        </div>
                        <div className="relative mb-4">
                            <RiLoginBoxFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                            <input className="rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="text" name="subject" placeholder="Enter subject" required />
                        </div>
                        <div className="relative mb-4">
                            <FaKeyboard className="absolute top-8 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                            <textarea className="w-full rounded-lg pl-10 pt-5 placeholder:text-[#2f2f57] text-[#2f2f57]" placeholder="Enter your message" name="message" rows={10} required></textarea>
                        </div>
                        <input className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] md:px-5 px-3 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300 hover:cursor-pointer" type="submit" value="Sent Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;