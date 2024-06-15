import { FeatureCard } from "./FeatureCard"

export const FeatureSection = () => {
    return (
        <div><section className=" py-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon="/icons/icon-precision.svg"
                        title="Accuracy"
                        description="From Coding to Claims, We Navigate the Complexities with Accuracy. Your Comprehensive Medical Billing Solution for Unmatched Precision in Revenue Cycle Management."
                    />
                    <FeatureCard
                        icon="/icons/icon-quality.svg"
                        title="Characteristics"
                        description="EliteMed is empowering Healthcare Providers with Seamless Revenue Cycle Solutions: Our Medical Billing Company is Committed to Precision, Compliance, and Efficiency, Ensuring Maximum Reimbursement and Financial Health for Your Practice."
                    />
                    <FeatureCard
                        icon="/icons/icon-inclusiveness.svg"
                        title="Inclusion"
                        description="We are fostering Inclusivity in Healthcare Financial Solutions. At Our Medical Billing Company, we embrace diversity & prioritize equitable access to our services, ensuring that all healthcare providers, regardless of size or specialty, can thrive in todays dynamic healthcare landscape."
                    />
                </div>
            </div>
        </section>
        </div>
    )
}
