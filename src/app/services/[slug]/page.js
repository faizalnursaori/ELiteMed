import { createClient } from "contentful";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const [service] = await getService(params.slug);
  const { title, description } = service.fields;
  return {
    title,
    description,
  };
}

export async function getService(slug) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_API_KEY,
    });

    const res = await client.getEntries({
      content_type: "services",
      "fields.slug": slug,
    });
    return res.items;
  } catch (error) {
    console.log(error);
  }
}

export default async function Service({ params }) {
  const [service] = await getService(params.slug);
  const { title, descriptionDetail, featuredImage } = service.fields;

  return (
    <>
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>

        <div className="flex justify-center mb-6">
          <Image
            src={`https:${featuredImage.fields.file.url}`}
            alt="thumbnail"
            width={featuredImage.fields.file.details.image.width}
            height={featuredImage.fields.file.details.image.height}
            className="max-w-full h-auto"
          />
        </div>

        <p className="text-lg leading-relaxed">{descriptionDetail}</p>
      </section>
    </>
  );
}
