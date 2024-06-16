import Image from "next/image";

export const TestimonialCard = ({ clientImage, clientRating, clientTestimonial, clientName }) => {
    return (
        <div className="p-4 md:p-10 mx-4 md:mx-10 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center">
            <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                <Image
                    src={clientImage}
                    alt={clientName}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                />
            </div>
            <div className="md:flex-grow">
                <div className="flex justify-center md:justify-start mb-2">
                    <p className="text-gray-600 font-semibold">{clientName}</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-2 md:mb-4">{clientTestimonial}</p>
                <div className="flex items-center justify-center md:justify-start">
                    <div className="flex items-center">
                        {Array.from({ length: clientRating }, (_, index) => (
                            <svg
                                key={index}
                                className="h-4 md:h-5 w-4 md:w-5 text-yellow-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
