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
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      {/* <!-- ===== Projects Grid End ===== --> */}
      
      <div className="mx-auto max-w-c-1390 py-20 px-4 md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              description: `To report a bug with the website, please report the issue in our GitHub repo.`,
            }}
          />
        </div>
      
      </section>
    </>
  );
};

export default BlogPage;
