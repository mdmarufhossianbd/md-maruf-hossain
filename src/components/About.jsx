import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import owner from '../../public/01516167351.jpg';
const About = () => {
    return (
        <div id="about" className='max-w-7xl lg:mx-auto md:mx-5 xl:p-0 p-5 lg:flex items-center md:my-20 my-10'>
            <div className='lg:w-[400px] flex flex-col items-center py-5 md:py-10 lg:py-0'>
                <Image className='rounded-xl' height={380} width={300} src={owner} alt='md maruf hossain' />
                <div className='w-[300px] text-center'>
                    <p className='text-3xl font-medium py-3'>Md Maruf Hossain</p>
                    <p className='text-xl pb-3'>Frontend Developer</p>
                    <div className="w-[200px] mx-auto text-3xl flex justify-between gap-3">
                        <Link href={'https://www.facebook.com/mdmarufhossain.bangladesh'} target="_blank" className="flex items-center gap-2"><FaFacebook className="text-[#1877F2] bg-white rounded-full" /></Link>
                        <Link href={'https://x.com/mdmarufh974'} target="_blank" className="flex items-center gap-2 bg-white rounded"><FaSquareXTwitter className="text-[#24292E]" /></Link>
                        <Link href={'https://www.linkedin.com/in/md-maruf-hossain-bd'} target="_blank" className="flex items-center gap-2"><FaLinkedin className="text-[#0077B5] bg-white rounded" /></Link>
                        <Link href={'https://github.com/mdmarufhossianbd'} target="_blank" className="flex items-center gap-2"><FaGithub className="text-[#24292E] bg-white rounded-full" /></Link>
                    </div>
                </div>
            </div>
            <div className='w-full lg:ml-20 text-justify text-[#ffffffcb]'>
                <h2 className='text-5xl font-semibold pb-5 text-white text-center md:text-left'>About Me</h2>
                <p className='mb-4'>Hello! I am Md Maruf Hossain, a passionate and dedicated frontend developer with a strong foundation in web development. My journey in the tech world began with my keen interest in creating visually appealing and user-friendly web applications. Over the years, I have honed my skills and expertise to deliver high-quality digital experiences. </p>
                <p className='mb-4'>I graduated in 2018 from National University, where I acquired a solid academic foundation. My quest for excellence led me to finished the <span className='font-medium'>Complete Web Development</span> course under the mentorship of <a className='font-semibold text-[#C961DE]' href="https://www.facebook.com/jhankarmahbubshow/" target="_blank">Jhankar Mahbub</a>, provided by <a className='font-semibold text-[#C961DE]' href="https://www.programming-hero.com" target="_blank" rel="noopener noreferrer">Programming Hero</a>. This course was instrumental in shaping my understanding of modern web development practices and equipped me with the skills to tackle real-world projects.
                 </p>
                <p className='mb-2'>With a keen eye for detail and a commitment to staying updated with the latest industry trends, I specialize in creating responsive and dynamic front-end solutions. My toolkit includes a wide array of technologies and frameworks, including:</p>
                    <ul className='mb-4'>
                        <li><span className='font-medium'>HTML & CSS : </span> Building the structure and style of web pages with precision and creativity.</li>
                        <li><span className='font-medium'>JavaScript : </span> Adding interactivity and dynamic behavior to websites.</li>
                        <li><span className='font-medium'>React.js : </span>Developing modern, component-based user interfaces.</li>
                        <li><span className='font-medium'>Node.js & Express.js : </span>Building scalable and efficient server-side applications.</li>
                        <li><span className='font-medium'>MongoDB : </span>Implementing NoSQL databases for flexible data storage.</li>
                        <li><span className='font-medium'>WordPress : </span>Creating and customizing websites using the popular content management system.
                        </li>
                    </ul>
                    <p className='mb-4'>In addition to my technical skills, I am an avid learner, continuously exploring new technologies and methodologies to enhance my capabilities. I believe in the power of collaboration and enjoy working in team environments to bring ideas to life.
                    </p>
                    <p className='mb-4'>When I'm not coding, you can find me exploring new places, reading tech blogs, or experimenting with new recipes in the kitchen. I am excited to connect with like-minded professionals and contribute to innovative projects that make a difference.
                    </p>
                    <p>
                        Thank you for visiting my portfolio. I look forward to connecting with you!
                    </p>               
            </div>
        </div>
    );
};

export default About;