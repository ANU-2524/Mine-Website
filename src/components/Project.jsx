import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-8 sm:py-10 gap-6"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div className="flex-1">
          <p className="text-xl sm:text-2xl font-medium">{title}</p>
          <div className="flex flex-wrap gap-3 sm:gap-5 mt-3 text-sand">
            {tags.map((tag) => (
              <span key={tag.id} className="text-sm sm:text-base">{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 cursor-pointer hover-animation text-white bg-white/5 sm:bg-transparent px-4 py-2 rounded-full sm:p-0"
        >
          <span className="text-sm sm:text-base">Read More</span>
          <img src="assets/arrow-right.svg" className="w-4 sm:w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;