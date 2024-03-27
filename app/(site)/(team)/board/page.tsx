import BlogData from "@/components/Blog-board/blogData";
import BlogItem from "@/components/Blog-board/BlogItem";
import SectionHeader from "components/Common/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "The TutoCo Team",
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
                subtitle: `The Executive Board`,
                description: `Here are the people ensuring you get connected with tutors ASAP!`,
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
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
