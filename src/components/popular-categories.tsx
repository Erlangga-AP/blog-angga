import { getAllCategories } from "@/utils/contentful-data";
import Link from "next/link";

export default async function PopularCategories() {
  const categories = await getAllCategories({ field_popular: true });

  return (
    <section className="flex flex-wrap justify-center items-center gap-4 md:gap-8 border-t-[1px] border-b-[1px] border-gray-300 py-4 px-4">
      {categories?.map((category) => (
        <Link
          key={category.slug as string}
          href={`/categories/${category.slug}`}
          className="text-sm md:text-base lg:text-lg font-medium text-gray-800 hover:text-blue-600 transition"
        >
          {category.title}
        </Link>
      ))}
    </section>
  );
}
