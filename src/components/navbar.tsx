"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { searchPostByTitle } from "@/utils/contentful-data";

export default function NavBar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search?q=${search}`);

    const postsByTitle = await searchPostByTitle(search);
    if (postsByTitle) {
      setSearch("");
    } else {
    }
  };

  return (
    <header>
      <nav className="bg-white mx-auto flex items-center justify-between px-5 py-3 font-LibreFranklin font-bold text-black">
        {/* Logo dan Link utama */}
        <div className="flex items-center gap-10">
          <div className="relative h-[45px] w-[50px]">
            <Image src="/shield-icon-black.svg" alt="logo image" fill />
          </div>
          <ul className="hidden md:flex gap-5">
            <Link href="/" className="py-2 px-3 hover:text-gray-600">
              Home
            </Link>
            <Link href="/blog" className="py-2 px-3 hover:text-gray-600">
              Blog
            </Link>
            <Link href="/categories" className="py-2 px-3 hover:text-gray-600">
              Categories
            </Link>
            <Link href="/about-us" className="py-2 px-3 hover:text-gray-600">
              About Us
            </Link>
          </ul>
        </div>

        {/* Tombol Toggle Menu untuk Mobile */}
        <button className="md:hidden text-2xl text-black" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-5">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-100 px-4 py-2 rounded-md text-black border-black border-[2px]"
            />
          </form>
        </div>
      </nav>

      {/* Dropdown Menu untuk Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-2 px-5 py-3">
            <Link href="/" className="py-2 px-3 hover:text-gray-600">
              Home
            </Link>
            <Link href="/blog" className="py-2 px-3 hover:text-gray-600">
              Blog
            </Link>
            <Link href="/categories" className="py-2 px-3 hover:text-gray-600">
              Categories
            </Link>
            <Link href="/about-us" className="py-2 px-3 hover:text-gray-600">
              About Us
            </Link>
            <form
              onSubmit={handleSearch}
              className="flex mt-3 border-[2px] border-black rounded-md"
            >
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-gray-100 px-4 py-2 rounded-md text-black outline-none w-full"
              />
            </form>
          </ul>
        </div>
      )}

      <div className="border-t-[1px] border-b-[1px] border-black"></div>
    </header>
  );
}
