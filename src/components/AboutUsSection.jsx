import Image from "next/image"

export const AboutUsSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 relative md:rounded-lg overflow-hidden md:mr-8 mb-8 md:mb-0">
                    <Image
                        src="/images/medical-billing.jpg"
                        alt="Medical"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                    <p className="text-xl text-gray-700 tracking-wider">About Us</p>
                    <h1 className="text-3xl font-bold mb-4">Your Reliable Billing Partner</h1>
                    <p className="text-gray-700 leading-relaxed max-w-xl">
                        EliteMed Billing was founded in 2005 by a team of experienced medical billing
                        professionals with a vision to streamline revenue cycle management for healthcare
                        providers. Starting as a small office, we quickly gained recognition for our expertise
                        in navigating billing complexities and ensuring compliance.
                    </p>
                    <p className="text-gray-700 leading-relaxed max-w-xl">
                        Our mission extends beyond transactional services; we are partners in your practices
                        growth. By providing tailored solutions, embracing innovation, and prioritizing
                        transparent communication, we empower healthcare providers to concentrate on what
                        matters most patient care. Join us on a journey of financial excellence, where your
                        success is our top priority.
                    </p>
                </div>
            </div>
        </section>
    )
}
