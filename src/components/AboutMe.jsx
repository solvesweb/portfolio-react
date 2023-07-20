import aboutme from '../assets/aboutme.jpg'

export const AboutMe = () => {
  return (
    <div className="bg-gray-100 py-8 px-6 flex flex-col-reverse md:flex-row gap-8 justify-center items-center text-center md:text-left">
      <div className='md:py-10 flex justify-center items-center'>
        <img className='max-h-80 rounded-2xl' src={aboutme} alt="About me" />
      </div>

      <div className='flex flex-col justify-center max-w-xl '>
        <h2 className='pb-4 text-sm uppercase font-bold text-teal-400'>About me</h2>
        <h3 className='pb-4 text-2xl font-bold'>A dedicated Web Developer based in Valencia, Spain 📍</h3>
        <p className='leading-7 tracking-wide'>
          As a Junior Web Developer, I possess an impressive arsenal of skills
          in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};
