import { CultureItem } from "./CultureItem"

export const CultureSection = () => {
    return (
        <>
            <section className="pt-[100px]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-[50px]">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4 text-center">Our Culture</h1>
                    <p className="mx-auto text-base sm:text-lg md:text-xl md:w-10/12 lg:w-8/12">
                        Customer-Centric Dedication, Collaborative Innovation, and Continuous Growth and
                        Learning
                    </p>
                    <CultureItem
                        title="Customer-Centric Dedication"
                        imageSrc="/images/customer-centric.jpg"
                        imageAlt="customer centric"
                        description="At EliteMed Billing, our unwavering dedication to our clients is the cornerstone of our culture. We prioritize understanding the unique needs of each healthcare provider, tailoring our services to ensure their utmost satisfaction. Our commitment to customer-centric excellence drives us to consistently exceed expectations and provide exceptional support throughout every interaction."
                        reverse={false}
                    />
                    <CultureItem
                        title="Collaborative Innovation"
                        imageSrc="/images/collaborative.jpg"
                        imageAlt="Collaborative"
                        description="Embracing a collaborative approach, we foster an environment that encourages fresh ideas and innovative solutions. Our team thrives on open communication, sharing diverse perspectives, and working together to tackle complex billing challenges. This collaborative spirit empowers us to continuously evolve, adapting to the ever-changing healthcare landscape and delivering cutting-edge services."
                        reverse={true}
                    />
                    <CultureItem
                        title="Continuous Growth and Learning"
                        imageSrc="/images/growth-learning.jpg"
                        imageAlt="Growth and Learning"
                        description="We believe in nurturing an environment that fosters continuous growth and learning. Our team is encouraged to embrace professional development opportunities, stay abreast of industry trends, and share their knowledge. This culture of lifelong learning drives us to consistently enhance our expertise, refine our skills, and deliver exceptional value to our clients."
                        reverse={false}
                    />
                </div>
            </section>
        </>
    )
}
