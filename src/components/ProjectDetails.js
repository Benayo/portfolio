import React from "react";

const ProjectDetails = ({
  title,
  description,
  siteLink,
  collaborators,
  role,
}) => (
  <div className="flex-grow grid md:grid-cols-10 gap-y-12 w-full text-white border-b border-white pb-12">
    <div className="md:col-span-2 flex flex-col">
      <div className="pt-6">
        <div className="text-[5rem] leading-none md:text-[7rem] font-main text-white transition-colors duration-300 ease-in-out group-hover:text-[#1DA1F2]">
          {title}
        </div>
      </div>
      <div className="text-left py-4">{description}</div>
      <div className="underline">{siteLink}</div>
    </div>

    <div className="md:col-span-2 md:col-start-7 flex flex-col justify-end">
      <div className="underline py-4">Client & Collaborators</div>
      {collaborators.map((collab, index) => (
        <div className="py-2" key={index}>
          {collab}
        </div>
      ))}
    </div>

    <div className="md:col-span-2 flex flex-col justify-end ">
      <div className="underline py-4">Role</div>
      {role.map((r, index) => (
        <div className="py-2" key={index}>
          {r}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectDetails;
