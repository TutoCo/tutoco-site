"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 text-tutoco font-medium">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "About Us",
              subtitle: "TutoCo's Mission",
              description: `We work to provide affordable and high-quality educational assistance
              to students, creating a unique and supportive environment for learning that's not found
              in the traditional school system. We aim to education more accessible to students in
              underprivileged communities, offering a safe space for academic growth and intellectual exploration.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-7.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-7.5 lg:grid-cols-3 xl:mt-7.5 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
