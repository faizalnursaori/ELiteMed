import Image from "next/image";
import { FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const ProfileCard = ({ firstName, lastName, picture }) => {
    const fullName = `${firstName} ${lastName}`;

    return (
        <div className="mt-10 space-y-10 flex flex-col lg:flex-row sm:items-center">
            <div className="flex flex-col sm:flex-col sm:items-center lg:flex-row items-center rounded-lg overflow-hidden bg-gray-100 shadow-lg w-full lg:w-auto">
                <div className="relative w-full sm:w-auto lg:w-[400px] h-[300px]">
                    <Image
                        src={picture}
                        alt={fullName}
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
                <div className="flex-1 space-y-4 px-6 lg:px-10 py-8 lg:py-0 sm:text-center lg:text-start">
                    <h2 className="text-2xl md:text-3xl font-bold">{fullName}</h2>
                    <h4 className="text-gray-600 mb-4 text-lg">Fullstack Web Developer</h4>
                    <p className="text-gray-700 text-lg"> A Full-Stack Web Developer is responsible for the end-to-end creation and maintenance of web applications. This includes designing and developing the user interface (front-end), implementing the underlying logic and data management (back-end), and ensuring seamless integration between the two.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://web.whatsapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                            <FaWhatsapp size={24} />
                        </a>
                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                            <FaYoutube size={24} />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                        >
                            <FaTwitter size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
