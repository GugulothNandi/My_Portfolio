import { useState } from "react";

function Contact() {
  const [showResume, setShowResume] = useState(false);

  const contacts = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/guguloth-nandi-789309320/",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
      name: "GitHub",
      link: "https://github.com/GugulothNandi",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },

    {
      name: "Mail",
      link: "mailto:nandhiguguloth@gmail.com",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-white px-6">
      <h1 className="text-4xl flex flex-col items-center justify-center  font-bold mb-4 h-12">
        Let’s Connect!
      </h1>

      <p className="flex items-center justify-center h-auto text-white text-center px-8 text-lg md:text-xl leading-relaxed">
        I’m always open to new opportunities, collaborations, and conversations.
        <br />
        Feel free to connect with me or check out my resume below.
      </p>

      <div className="flex gap-10 flex-wrap justify-center mb-12">
        {contacts.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-all duration-300
              hover:scale-110"
          >
            <img
              src={item.icon}
              alt={item.name}
              className="w-16 h-16 bg-white rounded-full p-2
                shadow-lg shadow-blue-500/40
                hover:shadow-xl hover:shadow-blue-400/80"
            />
            <p className="mt-2 font-semibold">{item.name}</p>
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <a
          href="/Guguloth_Nandi_Resume.pdf"
          download
          className="px-8 py-4 text-lg font-bold rounded-2xl border-2
            bg-black text-white
            shadow-lg shadow-blue-500/50
            hover:shadow-2xl hover:shadow-blue-400/90
            transition-all duration-300
            hover:scale-110 w-70 text-center"
        >
          ⬇️ Download Resume
        </a>

        <button
          onClick={() => setShowResume(true)}
          className="px-8 py-4 text-lg font-bold rounded-2xl
             border-2 text-white
            shadow-lg shadow-blue-500/40
             hover:shadow-2xl hover:shadow-blue-400/90
            transition-all duration-300
            hover:scale-110 w-50 text-center"
        >
          👁️ View Resume
        </button>
      </div>

      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
            bg-black/50 backdrop-blur-sm"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative w-[90%] md:w-[70%] h-[85%]
              bg-white rounded-2xl overflow-hidden
              shadow-2xl shadow-blue-400/80"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 text-white text-xl font-bold"
            >
              ✖
            </button>

            <iframe
              src="/Guguloth_Nandi_Resume.pdf"
              title="Resume"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
