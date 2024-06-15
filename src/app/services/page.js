import { ServiceContentCard } from "@/components/ServiceContentCard";
import { createClient } from "contentful";

export const metadata = {
  title: "Services | Elite Med",
};

export async function getServices() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_API_KEY,
    });

    const res = await client.getEntries({ content_type: "services" });
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function Services() {
  const services = await getServices();

  return (
    <div>
      {services.map((service) => (
        <ServiceContentCard key={service.sys.id} service={service} />
      ))}
    </div>
  );
}
