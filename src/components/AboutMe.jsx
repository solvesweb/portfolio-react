import aboutme from "../assets/aboutme.jpg";

export const AboutMe = () => {
  return (
    <div
      id="about"
      className="bg-gray-100 py-20 px-6 flex flex-col-reverse md:flex-row gap-8 justify-center items-center text-center md:text-left"
    >
      <div className="md:py-10 flex justify-center items-center">
        <img className="max-h-80 rounded-2xl" src={aboutme} alt="About me" />
      </div>

      <div className="flex flex-col justify-center max-w-xl ">
        <h2 className="pb-4 text-sm uppercase font-bold text-teal-400">
          About me
        </h2>
        <h3 className="pb-4 text-2xl font-bold">
          A dedicated Web Developer based in Valencia, Spain 📍
        </h3>
        <p className="leading-7 tracking-wide">
          I am a passionate web developer specialized in technologies such as
          HTML, CSS, JavaScript, and React. My focus is on creating innovative
          and efficient digital solutions, enhancing user experience, and
          exceeding expectations. I value continuous learning and believe in the
          importance of collaboration and teamwork. I am excited to contribute
          to challenging projects and create exceptional web experiences
          together!
        </p>
      </div>
    </div>
  );
};
