import Circle from "../home/circle";

function Home() {
  return (
    <div className="scroll-smooth">
      <section className="h-screen flex items-center justify-center">
        <Circle />
      </section>

      <section className="h-screen flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-100">
          Let me introduce myself
        </h2>

        <p className="text-lg md:text-xl max-w-2xl leading-relaxed text-gray-700 dark:text-gray-300">
          Hi, I’m <span className="font-semibold">Guguloth Nandi</span>, a
          B.Tech student at <span className="font-semibold">IIT Kharagpur</span>
          with a strong interest in
          <span className="font-semibold">
            Software Development Engineering
          </span>
          . I build a solid foundation through
          <span className="font-semibold">
            Data Structures and Algorithms in C++
          </span>
          and apply these principles to develop scalable, real-world
          applications. I have hands-on experience in
          <span className="font-semibold">
            frontend and full-stack development
          </span>
          using <span className="font-semibold">React.js</span>, Tailwind CSS,
          and modern JavaScript. I enjoy solving problems, writing clean and
          efficient code, and continuously growing as a software engineer.
        </p>
      </section>
    </div>
  );
}

export default Home;
