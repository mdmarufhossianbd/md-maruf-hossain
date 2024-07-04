"use client"
import { useState } from 'react';
import { FaKeyboard, FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLoginBoxFill } from 'react-icons/ri';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [responseMessage, setResponseMessage] = useState();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSentEmail = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (result.success) {
            setResponseMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            e.target.reset();
        } else {
            setResponseMessage('Failed to send your message. Please try again.');
        }
        setLoading(false)
    }

    return (
        <form onSubmit={handleSentEmail} className="py-4">
            <div className="relative mb-4">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <input className="rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
            </div>
            <div className="relative mb-4">
                <MdEmail className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <input className="rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="email" name="email" placeholder="Enter email address" onChange={handleChange} required />
            </div>
            <div className="relative mb-4">
                <RiLoginBoxFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <input className="rounded-lg pl-10 py-2 w-full text-[#2f2f57] placeholder:text-[#2f2f57] placeholder:font-medium" type="text" name="subject" placeholder="Enter subject" onChange={handleChange} required />
            </div>
            <div className="relative mb-4">
                <FaKeyboard className="absolute top-8 left-3 transform -translate-y-1/2 text-[#2f2f57]" />
                <textarea className="w-full rounded-lg pl-10 pt-5 placeholder:text-[#2f2f57] text-[#2f2f57]" placeholder="Enter your message" name="message" rows={10} onChange={handleChange} required></textarea>
            </div>
            {
                responseMessage ? <p className='text-green-500'>Successfully sent your message</p> : <input className="bg-gradient-to-r from-[#C961DE] to-[#2954A3] md:px-5 px-3 py-2 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:from-[#2954A3] hover:to-[#C961DE] duration-300 hover:cursor-pointer" type="submit" value={loading ? 'Sending your message' : 'Sent Message'} />
            }
        </form>
    );
};

export default ContactForm;