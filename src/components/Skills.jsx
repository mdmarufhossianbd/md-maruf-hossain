import { FaCss3Alt, FaHtml5, FaNode, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills" className="mt-[120px]">
            <h2 className="text-center text-5xl my-20 font-bold">My Skills</h2>
            <ul className="md:timeline md:timeline-vertical">
                <li>
                    <div className="timeline-start timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <FaHtml5 className="text-5xl text-orange-500" />
                            <h2 className="text-3xl font-semibold">HTML</h2>
                        </div>
                        <p className="text-justify"><b>HTML (HyperText Markup Language)</b> is the standard language used to create and structure content on the web. It allows you to define elements like headings, paragraphs, links, images, and other multimedia, forming the backbone of web pages.</p>
                    </div>
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr className="hidden md:block" />
                </li>
                <li>
                    <hr className="hidden md:block" />
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <FaCss3Alt className="text-5xl text-blue-500" />
                            <h2 className="text-3xl font-semibold">CSS</h2>
                        </div>
                        <p className="text-justify"><b>CSS (Cascading Style Sheets)</b> is a stylesheet language used to describe the presentation of a document written in HTML or XML. It allows you to control the layout, colors, fonts, and overall visual appearance of a web page, enhancing user experience and making the content more accessible and visually appealing.</p>
                    </div>
                    <hr className="hidden md:block" />
                </li>
                <li>
                    <hr className="hidden md:block" />
                    <div className="timeline-start timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <RiTailwindCssFill className="text-5xl text-[#00ffff]" />
                            <h2 className="text-3xl font-semibold">Tailwind CSS</h2>
                        </div>
                        <p className="text-justify"><b>Tailwind CSS</b> is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. It helps you create responsive, fast, and maintainable designs quickly without writing custom CSS.</p>
                    </div>
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr className="hidden md:block" />
                </li>
                <li>
                    <hr className="hidden md:block"/>
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    
                    <div className="timeline-end timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <IoLogoJavascript className="text-5xl text-[#d4c42c]" />
                            <h2 className="text-3xl font-semibold">JavaScript</h2>
                        </div>
                        <p className="text-justify"><b>JavaScript</b> is a versatile programming language primarily used to create dynamic and interactive elements on websites. You use it because it enables the development of responsive user interfaces, enhances user experience, and is essential for full-stack web development with frameworks like Node.js and React.</p>
                    </div>
                    <hr className="hidden md:block" />
                </li>
                <li>
                    <hr className="hidden md:block" />
                    <div className="timeline-start timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <FaReact className="text-5xl text-[#00ffff]" />
                            <h2 className="text-3xl font-semibold">React</h2>
                        </div>
                        <p className="text-justify"><b>React.js</b> is a popular JavaScript library for building user interfaces, particularly single-page applications, by creating reusable UI components. It is used for its efficiency, flexibility, and the ability to handle complex state management with ease.</p>
                    </div>
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr className="hidden md:block" />
                </li>
                <li>
                    <hr className="hidden md:block" />
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="timeline-end timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <FaNode className="text-5xl text-[#417e38]" />
                            <h2 className="text-3xl font-semibold">Node.js</h2>
                        </div>
                        <p className="text-justify"><b>Node.js</b> is a runtime environment that allows you to run JavaScript on the server side. It is used for building fast, scalable network applications due to its non-blocking, event-driven architecture.</p>
                    </div>
                    <hr className="hidden md:block" />
                </li>
                <li>
                    <hr className="hidden md:block" />
                    <div className="timeline-start timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <SiMongodb className="text-5xl text-green-700" />
                            <h2 className="text-3xl font-semibold">React</h2>
                        </div>
                        <p className="text-justify"><b>MongoDB</b> is a NoSQL database that stores data in flexible, JSON-like documents, allowing for dynamic schemas and scalable storage. It's used for its high performance, scalability, and ease of use in handling large volumes of unstructured data, making it ideal for modern web applications.</p>
                    </div>
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr className="hidden md:block" />
                </li>
                <li>
                    <hr className="hidden md:block" />
                    <div className="timeline-end timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <RiNextjsFill className="text-5xl" />
                            <h2 className="text-3xl font-semibold">Next.JS</h2>
                        </div>
                        <p className="text-justify"><b>Next.js</b> is a React framework that enables server-side rendering and static site generation, providing faster performance and improved SEO. It simplifies building complex applications with built-in features like routing, API handling, and optimized image loading.</p>
                    </div>
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                    <hr className="hidden md:block" />
                </li>                
                <li>
                    <hr className="hidden md:block" />
                    <div className="timeline-start timeline-box text-black lg:w-1/2 p-5">
                        <div className="flex items-center gap-5 pb-3">
                            <FaWordpress className="text-5xl" />
                            <h2 className="text-3xl font-semibold">WordPress</h2>
                        </div>
                        <p className="text-justify"><b>WordPress</b> WordPress is a popular open-source content management system (CMS) that allows users to create, manage, and customize websites easily. It is widely used for its flexibility, extensive plugin ecosystem, and user-friendly interface, making it ideal for both beginners and experienced developers to build a wide range of websites, from blogs to e-commerce stores.</p>
                    </div>
                    <div className="timeline-middle hidden md:block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd" />
                        </svg>
                    </div>
                </li>                
            </ul>
        </div>
    );
};

export default Skills;