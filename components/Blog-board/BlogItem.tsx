"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, role, metadata } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
{/*         <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill /> object-contain  items-center
        </Link> */}
        <Link href={`/blog/`} className="relative block mx-auto">
          <Image src={mainImage} alt={title} />
        </Link>

        <div className="px-4">
          <h3 className="mt-7.5 inline-block text-lg font-medium text-black duration-300 dark:text-white xl:text-itemtitle2">
            {title}
          </h3>
          <br></br>
          <h4 className="mb-3.5 inline-block text-lg font-medium text-black duration-300 dark:text-white xl:text-lg">{role}</h4>
          <p>{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
