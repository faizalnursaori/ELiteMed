import Image from "next/image"
import { Button } from "./ui/button"
export const HeroSection = () => {
    return (
        <div><section className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 bg-gray-100">
            <div className="md:w-5/12 my-9 container">
                <h1 className="text-[32px] md:text-[38px] font-bold text-sky-600 mb-2 leading-tight">
                    Tailored Firm Offering
                    <br />
                    Precise Medical Billing.
                </h1>
                <h2 className="text-lg font-bold text-green-700 mb-3">
                    Our claim acceptance rate stands at 99.9%
                </h2>
                <p className="text-gray-500 mb-4 leading-relaxed">
                    From the moment a patient steps through your doors to the successful collection of
                    payments, our dedicated Revenue Cycle Management (RCM) team is committed to identifying
                    and resolving any obstacles hindering your financial growth
                </p>
                <div className="flex gap-4">
                    <Button className="bg-sky-600 hover:bg-sky-700 py-2 px-6">Call Us</Button>
                    <Button className="bg-green-600 hover:bg-green-700 py-2 px-6">Leave a Message</Button>
                </div>
            </div>
            <div className="md:w-7/12 flex justify-end">
                <Image src="/images/nurse-doctor.png" alt="Nurse and Doctor" width={612} height={418} />
            </div>
        </section></div>
    )
}
