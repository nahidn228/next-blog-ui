import CreateBlogForm from "@/components/modules/Blogs/CreateBlogForm";
import React from "react";

const CreateBlog = () => {
  return (
    <div className="w-full justify-center items-center mx-auto">
      <h1 className="text-center text-xl">Create Blog</h1>
      <CreateBlogForm />
    </div>
  );
};

export default CreateBlog;
