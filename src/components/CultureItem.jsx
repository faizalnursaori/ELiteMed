import Image from "next/image"

export const CultureItem = ({ title, imageSrc, imageAlt, description, reverse }) => {
    return (
        <>
            <div className={`mt-10 flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex flex-col sm:flex-col sm:items-center lg:flex-row items-center rounded-lg overflow-hidden bg-gray-100 shadow-lg w-full lg:w-auto">
                    <div className={`relative w-full sm:w-auto lg:w-[400px] h-[300px] ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                        <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 1023px) 100vw, 400px" className="object-cover" />
                    </div>
                    <div className={`flex-1 space-y-4 px-4 sm:px-6 lg:px-10 py-8 lg:py-0 sm:text-center lg:text-start ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{title}</h2>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg">{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
