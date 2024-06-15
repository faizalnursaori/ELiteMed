import Image from "next/image"

export const AboutTeam = () => {
    return (
        <div>
            <section className="pt-[100px] mb-24">
                <div className="max-w-[1440px] mx-auto px-4 md:px-[50px]">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-center">
                        MEET OUR TEAM
                    </h1>
                    <p className="md:w-10/12 lg:w-8/12 mx-auto text-lg md:text-xl text-center">
                        At EliteMed Billing, our team is the driving force behind our success
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/jane-doe.jpg"
                                alt="Jane Doe"
                                width={400}
                                height={400}
                                className="w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">Jane Doe</h3>
                                <p className="text-sm text-gray-600">Chief Executive Officer</p>
                                <p className="text-sm mt-2">
                                    As our visionary leader, Jane brings over two decades of experience in healthcare
                                    revenue cycle management...
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/michael-johnson.png"
                                alt="Michael Johnson"
                                width={400}
                                height={400}
                                className="w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">Michael Johnson</h3>
                                <p className="text-sm text-gray-600">Chief Operating Officer</p>
                                <p className="text-sm mt-2">
                                    With a deep understanding of medical billing intricacies and a keen eye for
                                    process optimization.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/sarah-wilson.png"
                                alt="Sarah Wilson"
                                width={400}
                                height={400}
                                className="w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">Sarah Wilson</h3>
                                <p className="text-sm text-gray-600">Director of Billing Services</p>
                                <p className="text-sm mt-2">
                                    Sarah leads our dedicated team of billing specialists, fostering an environment of
                                    continuous learning and professional growth.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <Image
                                src="/images/david-thompson.png"
                                alt="David Thompson"
                                width={400}
                                height={400}
                                className="w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">David Thompson</h3>
                                <p className="text-sm text-gray-600">Director of Client Relations</p>
                                <p className="text-sm mt-2">
                                    Maintaining strong partnerships is at the core of David&aposs role. With his
                                    exceptional communication skills and client-centric approach.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
