import React from "react";
import { DOC } from "@/types/doc";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleSubject = ({ subject }: { subject: DOC }) => {
    const {id, title, description, tech } = subject;

    return (
        <>
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" id={id}>
                <h3>{title}</h3>

                <p className="text-body-color dark:text-body-color-dark text-base">
                    {description}
                </p>
                <p className="text-body-color dark:text-body-color-dark text-base">
                    <b>{tech}</b>
                </p>
            </div>
        </>
    );
};

export default SingleSubject;
