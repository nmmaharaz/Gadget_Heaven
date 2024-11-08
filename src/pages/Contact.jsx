import { useLoaderData } from "react-router-dom";
import ContactHero from "../components/ContactHero";
import ShowContactDetails from "../components/ShowContactDetails";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Contact = () => {
    const data = useLoaderData()
 
    return (
        <HelmetProvider>
            <Helmet>
                <title>Contact || Gadget Heaven</title>
            </Helmet>
            <div>
            <ContactHero></ContactHero>
            <div className="mx-auto w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                <div className="flex bg-white px-7 py-5 rounded-2xl">
                <FaPhone className="w-14 h-14 rounded-full text-white bg-[#2b398f] p-2"/>
                <div className="ml-2">
                    <p className="text-xl text-gray-600">Contact Us</p>
                    <p className="text-xl font-bold">+880 1610 229720</p>
                </div>
                </div>
                <div className="flex bg-white p-5 rounded-2xl">
                <MdEmail className="w-14 h-14 rounded-full text-white bg-[#2b398f] p-2"/>
                <div className="ml-2">
                    <p className="text-xl text-gray-600">For Corporate Deals & Complain</p>
                    <p className="text-xl font-bold">gadget@heaven.com</p>
                </div>
                </div>

            </div>
            <div>
                {
                    data.map(contact=><ShowContactDetails key={contact.contact_id} contact={contact}></ShowContactDetails>)
                }
            </div>
        </div>
        </HelmetProvider>
    );
};

export default Contact;