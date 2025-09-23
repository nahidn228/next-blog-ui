import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/PostServices";
import { IBlogs } from "@/types";

// export const generateStaticParams = () => {
//   return [{ blogId: "1" }];
// };
export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();

  return blogs.slice(0, 2).map((blog: IBlogs) => ({
    blogId: String(blog?.id),
  }));
};

// generate dynamic metadata

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  // const blog = await res.json();
  const blog = await getBlogById(blogId);

  return {
    title: blog?.title,
    description: blog?.content,
  };
};

const BlogDetailsPage = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
  const blogDetails = await getBlogById(blogId);
  console.log(blogDetails);

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard key={blogDetails?.id} blog={blogDetails} />
    </div>
  );
};

export default BlogDetailsPage;
