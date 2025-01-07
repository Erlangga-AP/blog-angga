"use client";

import { getAllBlogPost, getAllCategories } from "@/utils/contentful-data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Interface Definitions
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  blogImage: string;
  category: {
    name: string;
    slug: string;
  };
}

interface Category {
  title: string;
  slug: string;
}

export default function Blog() {
  const [blog, setBlog] = useState<BlogPost[]>([]); // BlogPost[]
  const [filteredBlog, setFilteredBlog] = useState<BlogPost[]>([]); // BlogPost[]
  const [categories, setCategories] = useState<Category[]>([]); // Category[]

  useEffect(() => {
    async function getDatas() {
      try {
        const blogData = (await getAllBlogPost()) as BlogPost[]; // Cast to BlogPost[]
        const categoryData = (await getAllCategories()) as Category[]; // Cast to Category[]
        setBlog(blogData);
        setFilteredBlog(blogData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getDatas();
  }, []);

  return (
    <section className="bg-white px-5 md:px-10 py-10 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10">
      {/* Blog Post List */}
      <div>
        <h2 className="font-semibold text-xl mb-5">BLOG POSTS</h2>
        {filteredBlog.map((item) => (
          <div
            key={item.slug}
            className="font-LibreFranklin mb-10 flex flex-col md:flex-row gap-6"
          >
            {/* Image */}
            <div className="relative w-full md:w-[891px] h-[350px] md:h-[400px]">
              <Image
                src={item.blogImage}
                alt="Blog Image"
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Blog Content */}
            <div className="flex flex-col">
              <h1 className="font-extrabold text-lg md:text-[25px]">
                {item.title}
              </h1>
              <p className="font-medium my-2 pb-1 text-sm md:text-base">
                {item.description}
              </p>
              <span className="font-medium bg-gray-300 text-sm px-4 py-2 rounded-full w-fit">
                {item.category.name}
              </span>

              <Link
                className="flex items-center gap-2 hover:bg-gray-300 rounded-md w-fit text-black px-4 py-2 font-bold mt-5 transition"
                href={`/blog/${item.slug}`}
              >
                Detail Motor
                <Image
                  src="/arrow-right.svg"
                  height={15}
                  width={15}
                  alt="Arrow Logo"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Categories Filter */}
      <div>
        <h2 className="text-xl font-semibold mb-4">BROWSE BY CATEGORY!</h2>

        <div className="flex flex-wrap gap-3">
          {/* All Categories Button */}
          <button
            className="border-[2px] border-black text-black px-4 py-2 rounded-full hover:bg-gray-300 transition"
            onClick={() => {
              setFilteredBlog(blog);
            }}
          >
            All
          </button>

          {/* Dynamic Category Buttons */}
          {categories.map((item) => (
            <button
              key={item.slug}
              className="border-[2px] border-black text-black px-4 py-2 rounded-full hover:bg-gray-300 transition"
              onClick={() => {
                const filter = blog.filter(
                  (blogItem) => blogItem.category.name === item.title
                );
                setFilteredBlog(filter);
              }}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
