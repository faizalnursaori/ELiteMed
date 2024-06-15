import Image from "next/image";

export const TestimonialCard = ({ clientImage, clientRating, clientTestimonial, clientName }) => {
    return (
        <div className="p-10 mx-10 bg-white rounded-lg shadow-lg flex items-center">
            <div className="relative w-24 h-24 mr-6 flex-shrink-0">
                <Image
                    src={clientImage}
                    alt={clientName}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                />
            </div>
            <div>
                <div className="flex items-center mb-2">
                    <div className="flex items-center">
                        {Array.from({ length: clientRating }, (_, index) => (
                            <svg
                                key={index}
                                className="h-5 w-5 text-yellow-400"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        ))}
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{clientTestimonial}</p>
                <p className="text-gray-600 font-semibold">{clientName}</p>
            </div>
        </div>
    );
};