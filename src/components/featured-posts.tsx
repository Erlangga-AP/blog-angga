import { getAllBlogPost } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturedPosts() {
  const posts = await getAllBlogPost({ fieldsFeatured: true });

  return (
    <section className="p-5 pb-24 mt-28 font-LibreFranklin">
      <h2 className="pb-5 font-black text-[24px] md:text-[30px] text-center md:text-left">
        TELUSURI JAJARAN MOTOR 2024
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts?.map((post) => (
          <article
            key={post.title as string}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative w-full h-[350px] sm:h-[250px] md:h-[300px]">
              <Image
                className="object-cover"
                src={post?.blogImage}
                alt="bike image"
                fill
              />
            </div>

            {/* Content Section */}
            <div className="p-4">
              <h2 className="font-black py-3 text-[18px] md:text-[20px]">
                {post.title}
              </h2>
              <p className="font-medium text-sm md:text-base text-gray-700">
                {post.description}
              </p>

              <Link
                className="flex items-center gap-2 hover:bg-gray-300 rounded-md w-fit text-black px-4 py-2 font-bold mt-5 transition"
                href={`/blog/${post.slug}`}
              >
                Lihat Motornya
                <Image
                  src="/arrow-right.svg"
                  height={15}
                  width={15}
                  alt="arrow logo"
                />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
