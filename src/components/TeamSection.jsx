import { fetchOurTeam } from "@/lib/data";
import ProfileCard from "./ProfileCard";

export const TeamSection = async () => {
    const ourTeams = await fetchOurTeam();
    return (
        <section className="pt-[50px] pb-[100px]">
            <div className="lg:px-40 space-y-8">
                {ourTeams &&
                    ourTeams.map((person, idx) => (
                        <ProfileCard
                            key={idx}
                            firstName={person.firstName}
                            lastName={person.lastName}
                            picture={person.picture}
                        />
                    ))}
            </div>
        </section>
    );
};