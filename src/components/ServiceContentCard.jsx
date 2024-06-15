import Image from "next/image"
import Link from "next/link"

export const ServiceContentCard = ({ service }) => {
    const { title, description, slug, thumbnail } = service.fields

    return (
        <>
            <div className="container mb-10">
                <div className="flex flex-col md:flex-row pt-[100px]">
                    <div className="w-full md:w-5/12 mb-4 md:mb-0">
                        <Image
                            src={`https:${thumbnail.fields.file.url}`}
                            alt="thumbnail"
                            width={480}
                            height={480}
                            className="mx-auto"
                        />
                    </div>
                    <div className="w-full md:w-7/12 pt-4 md:pt-10 md:pl-8">
                        <h2 className="text-2xl font-bold mb-2">{title}</h2>
                        <p className="leading-relaxed mb-4 text-justify w-10/12">{description}</p>
                        <Link href={`/services/${slug}`} className="font-semibold hover:underline">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
