import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    const myProjects = [
        {
            name : "Genius Quest Hub",
            description : "Genius Quest Hub is an online platform designed for hosting and participating in a variety of contests. Whether you're looking to test your skills, challenge yourself with new and exciting competitions, or simply have fun, Genius Quest Hub provides a user-friendly interface for participants to engage in contests across multiple domains.",
            liveUrl : "https://luminous-dusk-9dec82.netlify.app/",
            frontendGitHub : "https://github.com/mdmarufhossianbd/genius-quest-hub.git",
            backendGitHub : "https://github.com/mdmarufhossianbd/genius-quest-hub-backend.git",
            thumImage : "https://i.ibb.co/WKZVYXC/Business-Idea-Blitz.jpg"
        },
        {
            name : "Genius Workplace",
            description : "Welcome to the frontend of Genius Workplace, an innovative platform designed to transform the way we work and collaborate. This repository contains the frontend code built with React, providing an intuitive and responsive user interface for the application.",
            liveUrl : "https://genius-workplace.web.app/",
            frontendGitHub : "https://github.com/mdmarufhossianbd/genius-workplace-fronted.git",
            backendGitHub : "https://github.com/mdmarufhossianbd/genius-workplace-backend.git",
            thumImage : "https://i.ibb.co/WKZVYXC/Business-Idea-Blitz.jpg"
        },
        {
            name : "Artistic Strokes Studio",
            description : "Artistic Strokes Studio is a digital painting shop where customers can explore and purchase a wide range of beautifully crafted artworks. Whether you're looking for a unique piece to enhance your space or want to commission a custom painting that meets your specific preferences, our studio offers the perfect solution. Enjoy the convenience of browsing and ordering stunning digital art tailored to your taste, all from the comfort of your home.",
            liveUrl : "https://artistic-strokes-studio.web.app/",
            frontendGitHub : "https://github.com/mdmarufhossianbd/artistic-strokes-studio.git",
            backendGitHub : "https://github.com/mdmarufhossianbd/artistic-strokes-studio-backend.git",
            thumImage : "https://i.ibb.co/WKZVYXC/Business-Idea-Blitz.jpg"
        }
    ]
    return (
        <div id="projects" className="max-w-7xl mx-auto">
            <h2 className="text-center text-5xl font-semibold md:mt-20 mt-8">My Projects</h2>
            <hr className="md:mb-20 mb-8 w-[300px] mx-auto" />
            <div className="grid grid-cols-3 gap-10">
                {
                    myProjects.map((project, index)=> <div className="bg-[#2f2f57] p-5 rounded-lg" key={index}>
                        <Image className="w-full h-[300px] object-cover hover:snap-y" src={project.thumImage} alt={project.name} width={350} height={280}/>
                        <h2 className="text-xl font-semibold py-2 capitalize">{project.name}</h2>
                        <p className="text-justify pb-2">{project.description.slice(0, 127)}...</p>
                        <div className="flex justify-between">
                            <Link className="bg-[#fff] text-[#2f2f57] font-semibold px-5 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300" href={project.liveUrl} target="_blank">Live</Link>
                            <Link className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] md:px-5 px-3 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300" href={project.frontendGitHub} target="_blank">Frontend</Link>
                            <Link className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] md:px-5 px-3 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300" href={project.backendGitHub} target="_blank">Backend</Link>
                        </div>
                    </div>)
                }
            </div>   
        </div>
    );
};

export default Projects;