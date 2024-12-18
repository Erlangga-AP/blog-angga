import { getHeroSection } from "@/utils/contentful-data";
import Image from "next/image";

export default async function FeaturedPosts() {
  const posts = await getHeroSection();
  console.log(posts);

  return (
    <section className="p-5">
      <h2>Telusuri jajaran motor 2024</h2>
      <div className="grid grid-cols-3 gap-10">
        {posts?.items.map((post) => (
          <article key={post.fields.title as string}>
            <div className="relative w-full h-[300px]">
              <Image
                className="object-cover"
                src={`https:${post?.fields?.featuredImage?.fields.file.url}`}
                alt=""
                fill
              />
            </div>

            <h2>{post.fields.title}</h2>

            <p>{post.fields.description}</p>

            <h3 className="flex">
              LIHAT MOTORNYA
              <Image src="/arrow-right.svg" height={25} width={15} alt="" />
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
