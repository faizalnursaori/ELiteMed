import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <div>
            <footer className="bg-slate-200">
                <div className="container mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-1">
                            <Image src="/images/logo-elite-med.png" alt="Logo EliteMed" width={240} height={240} />
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                With a seasoned professional team, leading-edge technology, and a commitment to
                                precision, we navigate billing intricacies, ensuring accuracy, compliance, and
                                financial success.
                            </p>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold mb-4">Pages</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-600 hover:text-gray-800">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about-us" className="text-gray-600 hover:text-gray-800">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" className="text-gray-600 hover:text-gray-800">
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/teams" className="text-gray-600 hover:text-gray-800">
                                        Teams
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-1">
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <Image
                                        src="/icons/icon-call.svg"
                                        alt="Icon Call"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-600">+62 812-345-789</span>
                                </li>
                                <li className="flex items-center">
                                    <Image
                                        src="/icons/icon-mail.svg"
                                        alt="Icon Mail"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-600">mail@elitemed.com</span>
                                </li>
                                <li className="flex items-center">
                                    <Image
                                        src="/icons/icon-location.svg"
                                        alt="Icon Location"
                                        width={20}
                                        height={20}
                                        className="mr-2"
                                    />
                                    <span className="text-gray-600">Jalan Ir. Soekarno</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-sky-600">
                    <div className="container mx-auto py-4 px-5 text-center text-white">
                        <p>© 2024 EliteMed.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
