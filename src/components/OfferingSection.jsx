import Image from "next/image";

export const OfferingSection = () => {
    return (
        <div>
            <section className="py-24 mb-6">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-6/12 mb-8 md:mb-0">
                            <h1 className="font-bold text-4xl tracking-widest">What We Offer</h1>
                            <p className="text-gray-700 mt-4 leading-[1.6]">
                                We excel in handling medical billing for practices of all sizes. Whether you are a
                                solo practitioner or part of a large group, we enhance your cash flow, reduce costs,
                                and allow your staff to focus on patient care.
                            </p>
                            <p className="text-gray-700 mt-4 leading-[1.6]">
                                Doctors nationwide prefer our services due to our advanced technology and unwavering
                                commitment to complete satisfaction. We tackle billing challenges daily, addressing
                                issues like lower accounts receivable and cash flow problems. Imagine a day without
                                the stress of dealing with insurance.
                            </p>
                            <p className="text-gray-700 mt-4 leading-[1.6]">
                                Prioritize your practice; we assure you of timely, accurate claims, increased cash
                                flow, and shorter turnaround times. Our reports are easy to understand, and we stay
                                updated on billing technology. Choose us for a straightforward and efficient billing
                                experience.
                            </p>
                        </div>
                        <div className="md:w-6/12">
                            <Image
                                className="mx-auto rounded-md"
                                src="/images/offering.jpg"
                                alt="Offering"
                                height={620}
                                width={520}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}