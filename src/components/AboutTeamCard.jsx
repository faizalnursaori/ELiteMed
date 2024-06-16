import Image from "next/image"

export const AboutTeamCard = ({ imageSrc, altText, name, role, description }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
                src={imageSrc}
                alt={altText}
                width={400}
                height={400}
                className="w-full object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-sm text-gray-600">{role}</p>
                <p className="text-sm mt-2">{description}</p>
            </div>
        </div>
    )
}
