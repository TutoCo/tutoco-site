"use client";
import Link from "next/link";

const SidebarLink = () => {
  return (
    <>
      <li className="block">
        <Link
          href={`/subjects-offered`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-tutoco font-bold dark:bg-blackho dark:text-white`}
        >
          Subject Catalog
        </Link>
        <hr className="h-px my-2 bg-tutoco border-0"></hr>
        <Link
          href={`/subjects-offered#0`}
          className={`flex w-full rounded-sm px-3 py-2 text-base font-medium text-black dark:text-white `}
        >
          Writing and Essays
        </Link>
        <Link
          href={`/subjects-offered#2`}
          className={`flex w-full rounded-sm px-3 py-2 text-base font-medium text-black dark:text-white `}
        >
          Mathematics
        </Link>
        <Link
          href={`/subjects-offered#9`}
          className={`flex w-full rounded-sm px-3 py-2 text-base font-medium text-black dark:text-white `}
        >
          Language
        </Link>
        <Link
          href={`/subjects-offered#13`}
          className={`flex w-full rounded-sm px-3 py-2 text-base font-medium text-black dark:text-white `}
        >
          History
        </Link>
        <Link
          href={`/subjects-offered#17`}
          className={`flex w-full rounded-sm px-3 py-2 text-base font-medium text-black dark:text-white `}
        >
          Science
        </Link>
        <Link
          href={`/subjects-offered#21`}
          className={`flex w-full rounded-sm px-3 py-2 text-base font-medium text-black dark:text-white `}
        >
          SAT
        </Link>
        <Link
          href={`/subjects-offered#24`}
          className={`flex w-full rounded-sm px-3 py-2 text-base font-medium text-black dark:text-white `}
        >
          Programming
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
