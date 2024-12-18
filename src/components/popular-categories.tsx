import Link from "next/link";

export default function PopularCategories() {
  return (
    <section className="flex justify-center items-center gap-10 border-t-[1px] border-b-[1px] border-gray-300 py-4">
      <Link href="">Grand American Touring</Link>
      <div className="h-[25px] w-[1px] bg-gray-300"></div>
      <Link href="">Cruiser</Link>
      <div className="h-[25px] w-[1px] bg-gray-300"></div>
      <Link href="">Adventure Touring</Link>
      <div className="h-[25px] w-[1px] bg-gray-300"></div>
      <Link href="">Sport</Link>
    </section>
  );
}
