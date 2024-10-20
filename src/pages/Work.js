import React, { useState } from "react";
import Navbar from "../components/navigation/Navbar";
import NavPage from "../components/navigation/NavPage";
import ProjectDetails from "../components/ProjectDetails";

const projects = [
  {
    title: "ARUNA",
    description:
      "Combining aesthetics and usefulness, I create solid user interfaces in an artistic way. I love to spend time improving the aesthetics of digital products without forgetting about usability.",
    siteLink: "Visit Site",
    collaborators: [
      "Denova Media (Client)",
      "Olacodes (Designer)",
      "Yinka (UX Writer)",
    ],
    role: ["Frontend", "UI/UX"],
  },
  {
    title: "JEKAEAT",
    description:
      "Combining aesthetics and usefulness, I create solid user interfaces in an artistic way. I love to spend time improving the aesthetics of digital products without forgetting about usability.",
    siteLink: "Visit Site",
    collaborators: [
      "Soliu Alley (Client)",
      "Mattew Adams (Designer)",
      "Yinka (UX Writer)",
    ],
    role: ["UI/UX"],
  },
  {
    title: "HAGE",
    description:
      "Combining aesthetics and usefulness, I create solid user interfaces in an artistic way. I love to spend time improving the aesthetics of digital products without forgetting about usability.",
    siteLink: "Visit Site",
    collaborators: [
      "Adekunle Praise (Client)",
      "Olacodes (Designer)",
      "Yinka (UX Writer)",
    ],
    role: ["Frontend", "UI/UX"],
  },
];

const Work = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="bg-[#151118] min-h-screen ">
      <Navbar IsMenu={menu} onMenuToggle={menuHandler} />

      {!menu ? (
        <div className=" p-8 md:px-16 z-20">
          <div className="font-sub pb-4 border-b border-white text-white ">
            Featured works
          </div>

          {projects.map((project, index) => (
            <ProjectDetails
              key={index}
              title={project.title}
              description={project.description}
              siteLink={project.siteLink}
              collaborators={project.collaborators}
              role={project.role}
            />
          ))}
        </div>
      ) : (
        <NavPage onMenuToggle={menuHandler} />
      )}
    </div>
  );
};

export default Work;
