import BlogData from "@/components/Blog-devops/blogData";
import BlogItem from "@/components/Blog-devops/BlogItem";
import SectionHeader from "components/Common/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps",
  description: "code monkeys 🤓",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>
      <section className="py-25 lg:py-30 xl:py-35">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center text-tutoco font-medium">
            <SectionHeader
              headerInfo={{
                title: `TutoCo Team`,
                subtitle: `TutoCo DevOps`,
                description: `Here is TutoCo's in-house dev team! `,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>
        {/* <!-- ===== Blog Grid Start ===== --> */}
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
        {/* <!-- ===== Blog Grid End ===== --> */}
       
        {/* <!-- ===== Projects Grid Start ===== --> */}
{/*         <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div> */}
      {/* <!-- ===== Projects Grid End ===== --> */}
      </section>

      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <p className="text-body-color dark:text-body-color-dark text-base">
                  This document serves as a simple template to showcase a sample
                  layout and format. It is solely created for demonstration
                  purposes and is not intended for any official use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default BlogPage;
