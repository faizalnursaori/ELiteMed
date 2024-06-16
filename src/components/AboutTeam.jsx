import Image from "next/image"
import { AboutTeamCard } from "./AboutTeamCard"
import { teamMemberData } from "@/utils/helper"

export const AboutTeam = () => {
    return (
        <div>
            <section className="pt-[100px] mb-24">
                <div className="max-w-[1440px] mx-auto px-4 md:px-[50px]">
                    <h1 className="text-3xl md:text-4xl font-bold uppercase mb-4 text-center">
                        MEET OUR TEAM
                    </h1>
                    <h2 className="md:w-10/12 lg:w-8/12 mx-auto text-2xl md:text-xl text-center">
                        At EliteMed Billing, our team is the driving force behind our success
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
                        {teamMemberData.map((member) => (
                            <AboutTeamCard
                                key={member.id}
                                imageSrc={member.imageSrc}
                                altText={member.altText}
                                name={member.name}
                                role={member.role}
                                description={member.description}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
