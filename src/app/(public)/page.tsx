import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IBlogs } from "@/types";

export default async function HomePage() {
  // this is ISR
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    next: {
      revalidate: 30,
    },
  });
  const { data: blogs } = await res.json();
  console.log(blogs);
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto my-5">
        {blogs.slice(0, 3).map((blog: IBlogs) => (
          <BlogCard key={blog?.id} post={blog} />
        ))}
      </div>
    </div>
  );
}
