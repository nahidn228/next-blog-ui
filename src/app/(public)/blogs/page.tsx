import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IBlogs } from "@/types";

const AllBlogsPage = async () => {
  // this is SSR
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store",
  });
  const { data: allBlogs } = await res.json();
  console.log(allBlogs);
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs: {allBlogs?.length}</h2>
      <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto my-10">
        {allBlogs.map((blog: IBlogs) => (
          <BlogCard key={blog?.id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
