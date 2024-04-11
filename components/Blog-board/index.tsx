import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData_exec from "./blogData_exec";
import BlogData_mark from "./blogData_mark";
import BlogData_tuto from "./blogData_tuto";
import BlogData_comm from "./blogData_comm";
import BlogData_logi from "./blogData_logi";


const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData_exec.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem_mark blog={blog} key={key} />
          ))}
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem_tuto blog={blog} key={key} />
          ))}
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem_comm blog={blog} key={key} />
          ))}
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem_logi blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
