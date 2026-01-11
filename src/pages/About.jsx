import Achievements from "../components/Achievements";
function About() {
  const technicalSkills = [
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/480/tailwind_css.png",
    },
  ];
  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Leadership",
    "Adaptability",
    "Time Management",
    "Communication",
  ];
  const tools = [
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
  ];
  return (
    <div className="scroll-smooth text-white">
      <section className="flex flex-col md:flex-row min-h-screen overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
          <h1 className="text-5xl font-extrabold mb-6 text-white text-center">
            Know Who I’m
          </h1>

          <p className="text-lg text-gray-300 max-w-md text-center leading-relaxed">
            Hi everyone! I’m{" "}
            <span className="text-white font-semibold">Guguloth Nandi</span>,
            from Telangana, India. <br />
            <br />I am currently pursuing my{" "}
            <span className="text-white font-semibold">
              B.Tech in Chemical Engineering
            </span>{" "}
            at <span className="text-white font-semibold">IIT Kharagpur</span>.{" "}
            <br />
            <br />I have a strong interest in{" "}
            <span className="text-white font-semibold">
              Software Development Engineering
            </span>
            , with a focus on{" "}
            <span className="text-white font-semibold">
              Data Structures and Algorithms in C++
            </span>{" "}
            and building scalable{" "}
            <span className="text-white font-semibold">
              frontend and full-stack applications
            </span>
            . I enjoy applying problem-solving skills to real-world software
            projects using modern web technologies.
            <br />
            <br />
            Outside of coding, I enjoy Fine Arts, music, and exploring new
            technologies.
          </p>

          <p className="mt-8 italic text-gray-200 text-center text-lg">
            “Strive to build things that make a difference.”
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          {" "}
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/coding-language-5329566-4470559.png"
            alt="Developer illustration"
            className="w-full max-w-md md:max-w-lg h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
          />
        </div>
      </section>
      <section className="min-h-screen flex flex-col items-center py-16 px-6">
        <div className="h-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
            Professional Skillset
          </h1>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center w-full max-w-5xl">
          {technicalSkills.map((skill) => (
            <div
              key={skill.name}
              className=" text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] active:shadow-[0_0_30px_rgba(147,197,253,0.9)] transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:bg-blue-300 active:scale-120 w-40 h-40 cursor-pointer"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-3 object-contain"
              />
              <span className="font-semibold text-sm md:text-base text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
        <div className="h-20 flex items-center justify-center ">
          <h2 className="text-3xl font-bold mt-20 mb-8 text-white text-center">
            Soft Skills
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          {softSkills.map((skill) => (
            <div
              key={skill}
              className="text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] active:shadow-[0_0_30px_rgba(147,197,253,0.9)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 active:bg-blue-300 active:scale-95 h-10 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center h-20">
          <h2 className="text-3xl font-bold mt-20 mb-8 text-white text-center">
            Tools I Use
          </h2>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] active:shadow-[0_0_30px_rgba(147,197,253,0.9)] transition-all duration-300 hover:-translate-y-2 hover:scale-105 active:bg-blue-300 active:scale-95 w-40 h-40 cursor-pointer"
            >
              <img src={tool.icon} alt={tool.name} className="w-16 h-16 mb-3" />
              <span className="font-semibold text-sm md:text-base">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </section>
      <Achievements />
    </div>
  );
}
export default About;
