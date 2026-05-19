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
    <div 
      className="group relative flex flex-col grid-default-color overflow-hidden p-0 rounded-3xl"
      onMouseEnter={() => setPreview(image)}
      onMouseLeave={() => setPreview(null)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo/80 via-transparent to-transparent opacity-60" />
      </div>

      <div className="flex flex-col p-6 flex-1">
        <div className="flex justify-between items-start gap-2 mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-aqua transition-colors">
            {title}
          </h3>
          <a href={href} target="_blank" rel="noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <img src="assets/arrow-right.svg" className="w-4 h-4 -rotate-45" alt="link" />
          </a>
        </div>

        <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.slice(0, 3).map((tag) => (
            <div key={tag.id} className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              {tag.path && <img src={tag.path} alt={tag.name} className="w-3.5 h-3.5" />}
              <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-300">{tag.name}</span>
            </div>
          ))}
          {tags.length > 3 && (
            <span className="text-[10px] text-neutral-500 self-center">+{tags.length - 3} more</span>
          )}
        </div>
      </div>

      <button
        onClick={() => setIsHidden(true)}
        className="absolute inset-0 z-10 w-full h-full cursor-pointer opacity-0"
        aria-label={`View details for ${title}`}
      />

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
    </div>
  );
};

export default Project;