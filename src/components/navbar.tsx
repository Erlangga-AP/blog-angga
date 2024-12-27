import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <nav className=" bg-white mx-auto flex justify-between text-black px-10 font-LibreFranklin font-bold">
        <div>LOGO</div>
        <ul className="flex">
          <Link className="py-3 px-2 text" href="/">
            Home
          </Link>
          <Link className="py-3 px-2 text" href="/blog">
            Blog
          </Link>
          <Link className="py-3 px-2 text" href="/categories">
            Categories
          </Link>
          <Link className="py-3 px-2 text" href="about-me">
            About Me
          </Link>
        </ul>
      </nav>
    </header>
  );
}
