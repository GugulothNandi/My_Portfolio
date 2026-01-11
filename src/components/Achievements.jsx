function Achievements() {
  const achievements = [
    {
      emoji: "🎖️",
      text: (
        <>
          Secured an
          <span className="font-semibold">All India Rank of 629 (ST)</span> in
          JEE Advanced 2023 among 0.18 million participants.
        </>
      ),
    },
    {
      emoji: "🧠",
      text: (
        <>
          Achieved{" "}
          <span className="font-semibold">All India Rank 2311 (ST)</span> in JEE
          Mains 2023 among 1.11 million participants.
        </>
      ),
    },
    {
      emoji: "🏅",
      text: (
        <>
          Ranked <span className=" font-semibold">4761</span> in TSEAMCET 2023
          among 0.3 million participants.
        </>
      ),
    },
    {
      emoji: "🥇",
      text: (
        <>
          Won a{" "}
          <span className=" font-semibold">Gold Medal in Rangoli Event</span>{" "}
          representing Azad Hall of Residence, IIT Kharagpur (2024).
        </>
      ),
    },
    {
      emoji: "💼",
      text: (
        <>
          Received an{" "}
          <span className=" font-semibold">Offer Letter from CodSoft</span> as a
          Software Developer Intern.
        </>
      ),
    },
  ];

  return (
    <section className="min-h-screen text-white flex flex-col items-center py-16 px-6">
      <div className="w-full flex justify-center items-center mb-10 h-30">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-blue-900">
          Achievements & Extracurricular Activities
        </h1>
      </div>

      <div className="max-w-4xl w-full space-y-6">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 transition-all duration-300 rounded-xl p-5 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
          >
            <div className="text-2xl md:text-3xl">{item.emoji}</div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
