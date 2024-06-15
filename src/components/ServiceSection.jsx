import { ServiceCard } from "./ServiceCard";
import { servicesList } from "@/utils/helper";

export const ServiceSection = () => {
    return (
        <section className="bg-sky-600">
            <div className="container px-5 pt-7 pb-12 mx-auto">
                <div className="py-10 text-center">
                    <p className="text-white font-bold tracking-widest">Services</p>
                    <h1 className="text-white font-bold text-4xl mt-3">Our Specialities</h1>
                </div>
                <div className="flex flex-wrap -m-4 mt-2">
                    {servicesList.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
