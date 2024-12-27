import { getHeroSection } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedPosts() {
  const posts = await getHeroSection();
  console.log(posts);

  return (
    <section className="p-5 pb-48 mt-28 font-LibreFranklin">
      <h2 className="pb-3 font-black text-[30px]">
        TELUSURI JAJARAN MOTOR 2024
      </h2>
      <div className="grid grid-cols-3 gap-5">
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

            <h2 className="font-black py-5 text-[20px]">{post.fields.title}</h2>

            <p className="font-medium">{post.fields.description}</p>

            <Link href="" className="flex gap-3 font-bold pt-4">
              LIHAT MOTORNYA
              <Image src="/arrow-right.svg" height={25} width={15} alt="" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
