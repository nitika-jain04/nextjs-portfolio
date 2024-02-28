import Link from "next/link";

export default function About() {
  return (
    <div className="px-60 flex flex-col pt-20 bg-[#111111] bg-opacity-95">
      <div className="flex flex-col md:flex-row gap-20 md:items-center">
        <div className="md:mr-10 mb-6 md:mb-0">
          <img
            className="rounded-full w-52 h-52 bg-red-200 object-cover bg-transparent"
            src="/about-humanemoji.png"
            alt="Nitika"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
        </div>
        <div>
          <h1
            className="text-4xl font-bold mb-4 text-white drop-shadow-md shadow-gray-500"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Hello, I'm Nitika Jain!
          </h1>
          <p
            className="text-base max-w-xl leading-7 text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            I'm a passionate web developer with a focus on React.js. My journey
            in web development began during my B.Tech. second year, sparked by a
            general interest in HTML and CSS. Since then, I've delved into
            JavaScript and various front-end technologies, cultivating a love
            for creating interactive and user-friendly web applications.
          </p>
          <p
            className="text-base leading-7 mt-2 max-w-xl text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            I have hands-on experience with front-end technologies like React,
            Next.js, and Tailwind CSS. I thrive on learning new technologies and
            staying up-to-date with the latest trends in the ever-evolving field
            of web development.
          </p>
          <p
            className="text-base leading-7 mt-2 max-w-xl text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Outside of coding, you can find me baking, in outdoor sports and
            listening to music.
          </p>
          <p
            className="text-base leading-7 mt-2 max-w-xl text-gray-400"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Let's join forces and turn dull projects into coding adventures!
            Reach out, and together we'll create web magic that's so good, even
            browsers will high-five us.
          </p>
        </div>
      </div>
      {/* Add a section for showcasing your projects */}
      {/* <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Featured Projects
        </h2> */}
      {/* Add cards or a carousel to showcase your projects */}
      {/* </div> */}
      {/* Add a section for your skills */}
      {/* <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2> */}
      {/* List your skills using icons or badges */}
      {/* </div> */}
      {/* Add a call-to-action */}
      <Link
        href="/contact"
        className="mt-10 mb-32 ml-9 bg-white text-gray-700 hover:bg-gray-600 hover:drop-shadow-md hover:shadow-inner hover:shadow-white hover:text-white hover:bg-opacity-10 w-fit rounded-lg px-4 py-2"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <p>Get in Touch</p>
      </Link>
    </div>
  );
}
