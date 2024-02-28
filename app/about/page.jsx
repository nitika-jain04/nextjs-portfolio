export default function About() {
  return (
    <div className="px-20 flex flex-col mt-20">
      <div>
        <div>
          <p>
            Hello, I'm [Your Name], a passionate web developer with a focus on
            React.js. I enjoy creating interactive and user-friendly web
            applications. My journey in web development started [mention your
            background or when you started coding].
          </p>
          <p>
            I have hands-on experience with front-end technologies like React,
            HTML, CSS, and JavaScript. I am enthusiastic about learning new
            technologies and always staying up-to-date with the latest trends in
            the ever-evolving field of web development.
          </p>
          {/* Add more details about your skills, experiences, or anything else you want to highlight */}
        </div>
        <div>
          {/* Include a professional photo of yourself */}
          <img src="/path/to/your/photo.jpg" alt="Your Name" />
        </div>
      </div>
    </div>
  );
}
