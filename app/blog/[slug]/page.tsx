import { client, urlFor } from "@/lib/sanity";
import { FullBlog } from "@/lib/types";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 10;

async function getData(slug: string) {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      title,
      content,
      image,
  }[0]
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: FullBlog = await getData(params.slug);

  return (
    <div>
      <h1 className="text-center mt-9 text-3xl tracking-tight leading-8">
        {data.title}
      </h1>
      <Image
        className="rounded-lg w-full h-auto mt-5"
        src={urlFor(data.image).url()}
        width={500}
        height={500}
        priority
        alt={data.title}
      />
      <div className="my-12 prose prose-lg dark:prose-invert">
        <PortableText value={data.content}></PortableText>
      </div>
    </div>
  );
}
