import Image from "next/image"

export const ServiceCard = ({ icon, title }) => {
    return (
        <div className="p-4 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
            <div className="h-full bg-white px-5 py-12 rounded-lg text-center flex flex-col items-center">
                <Image src={icon} alt={title} height={80} width={80} />
                <h6 className="font-medium text-lg mt-4 tracking-wider">{title}</h6>
            </div>
        </div>
    );
};
