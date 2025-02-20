import React, { useEffect, useState } from "react";
import { getBlogs } from "..";
import BlogCard from "../components/BlogCard";

const BookMarks = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const saveBlog = getBlogs();
    setBlogs(saveBlog);
  }, []);

  if(blogs.length<1){
    return <h1>Kicu nai vai</h1>
  }

  return (
    <section className="py-6 sm:py-12  text-gray-800">
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
        {
            blogs.map(blog=><BlogCard key={blog.id} deleted={true} blog={blog}></BlogCard>)
        }
        </div>
      </div>
    </section>
  );
};

export default BookMarks;
