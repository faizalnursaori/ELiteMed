import Image from "next/image"
import { Button } from "./ui/button"

export const AboutSection = () => {
    return (
        <div><section className=" py-24 mb-6">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-6/12 md:pr-8 mb-8 md:mb-0">
                    <p className="text-md tracking-wide text-sky-600 mb-2">About Us</p>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">
                        EliteMed Billing
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6 w-11/12">
                        EliteMed supports medical professionals with billing, simplifying the process and
                        increasing revenue. Our skilled team, cutting-edge technology, and commitment to
                        accuracy guarantee a seamless billing experience, adhering to regulations and bringing
                        financial success to healthcare providers nationwide.
                    </p>
                    <Button className="bg-sky-600 hover:bg-sky-700 py-2 px-6">Load More</Button>
                </div>
                <div className="md:w-6/12 md:pl-8">
                    <Image
                        className="rounded-md"
                        src="/images/doctor-with-laptop.jpg"
                        alt="Doctor front of laptop"
                        width={520}
                        height={520}
                    />
                </div>
            </div>
        </section></div>
    )
}
