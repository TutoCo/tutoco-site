import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";
import subjectsData from "./subjectsData";
import SingleSubject from "./SingleSubject";

export const metadata: Metadata = {
  title: "Subjects Offered",
  description: "Find out what subjects we tutor!",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[120px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1 id="0">Subject Catalog</h1>

                <p>
                  Here you'll find all the subjects that are offered for tutoring help by TutoCo, along with descriptions.
                </p>
                <a href="https://docs.google.com/document/d/1_lie9Jntem0DCETF7ZKXu7wzsxO8-j-nXWjG68nwdTs/edit?usp=sharing" target="_blank" className="font-bold">
                  <p>
                    <b>For more information on subjects and payments, click here.</b>
                  </p>
                </a>
              </div>
              {/*Subject Tab*/}
              {subjectsData.map((subject, key) => (
                <SingleSubject subject={subject} key={key} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
