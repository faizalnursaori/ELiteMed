import Image from "next/image"

export const FeatureCard = ({ icon, title, description }) => {
    return (
        <div>
            <div className="p-6">
                <div className="bg-gradient-to-r from-sky-500 to-sky-700 rounded-lg text-white px-8 pt-10 pb-10 overflow-hidden relative shadow-lg transform hover:scale-105 transition-transform duration-300 h-[400px]">
                    <div className="flex items-center gap-4 mb-4">
                        <Image
                            src={icon}
                            alt={title}
                            width={40}
                            height={40}
                            className="mb-5"
                        />
                        <h2 className="text-3xl font-semibold mb-3">{title}</h2>
                    </div>
                    <p className="text-gray-100 leading-relaxed mb-3">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
