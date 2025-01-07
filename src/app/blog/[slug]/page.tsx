import { getSingleBlogPost } from "@/utils/contentful-data";
import Image from "next/image";
import { BLOCKS, Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface BlogPost {
  blogImage: string;
  title: string;
  content: Document;
}

// Tidak perlu mendefinisikan tipe Params secara manual.
export default async function DetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  // Ambil data post
  const post = (await getSingleBlogPost(slug)) as unknown as BlogPost;

  // Tangani jika data tidak ditemukan
  if (!post) {
    return (
      <section className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </section>
    );
  }

  return (
    <section className="bg-white font-LibreFranklin">
      <div className="pt-10 flex flex-col items-center">
        <div className="relative h-[300px] w-[500px] lg:h-[450px] lg:w-[700px] max-w-4xl grid justify-items-center">
          <Image
            src={post.blogImage}
            alt="image"
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-[32px] sm:text-[40px] md:text-[50px] pt-5 font-bold text-center max-w-4xl px-6">
          {post.title}
        </h1>

        <div className="px-6 sm:px-12 md:px-36 pb-20">
          {documentToReactComponents(post.content, {
            renderNode: {
              [BLOCKS.HEADING_2]: (node, children) => {
                return (
                  <h2 className="font-semibold mt-9 text-2xl sm:text-lg md:text-lg">
                    {children}
                  </h2>
                );
              },
              [BLOCKS.PARAGRAPH]: (node, children) => {
                return (
                  <p className="mt-4 text-base sm:text-base md:text-base font-normal">
                    {children}
                  </p>
                );
              },
              [BLOCKS.UL_LIST]: (node, children) => {
                return (
                  <ul className="list-disc pl-7 text-lg sm:text-xl md:text-2xl font-bold text-[#494A53]">
                    {children}
                  </ul>
                );
              },
            },
          })}
        </div>
      </div>
    </section>
  );
}
