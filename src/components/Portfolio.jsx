import { useEffect, useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [skillInView, setSkillInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const top = skillsSection.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          setSkillInView(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
  };

  // प्रोजेक्ट्स की लिस्ट - अब हर एक का अलग लिंक
  const projects = [
    {
      title: "About Page",
      desc: "Full-stack MERN e-commerce with cart, payment & admin panel.",
      img: "/images/Coming Soon Minimalist Facebook Cover.jpg",
      link: "https://learn-nextjs-three-khaki.vercel.app/about-us",
    },
    {
      title: "Task Manager App",
      desc: "React + Firebase task app with drag-drop & real-time sync.",
      img: "https://via.placeholder.com/300x200/10B981/ffffff?text=Task+App",
      link: "https://learn-nextjs-three-khaki.vercel.app/Base",
    },
    {
      title: "Weather Dashboard",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://learn-nextjs-three-khaki.vercel.app/chefkitchen",
    },
    {
      title: "Contact Us",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",

      link: "https://learn-nextjs-three-khaki.vercel.app/contact",
    },
    {
      title: "CrossPoint",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://learn-nextjs-three-khaki.vercel.app/crosspoint",
    },
    {
      title: "HealthCare Detail",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "http://localhost:3002/healthcaredetail",
    },
    {
      title: "Houston",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://learn-nextjs-three-khaki.vercel.app/houston",
    },
    {
      title: "Mario",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://learn-nextjs-three-khaki.vercel.app/mario",
    },
    {
      title: "Oxford",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://learn-nextjs-three-khaki.vercel.app/oxford",
    },
    {
      title: "Solution Page",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://learn-nextjs-three-khaki.vercel.app/Solution",
    },
    {
      title: "Weather Dashboard",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://weather-lalit.netlify.app",
    },
    {
      title: "Weather Dashboard",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://weather-lalit.netlify.app",
    },
    {
      title: "Weather Dashboard",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://weather-lalit.netlify.app",
    },
    {
      title: "Weather Dashboard",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://weather-lalit.netlify.app",
    },
    {
      title: "Weather Dashboard",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://weather-lalit.netlify.app",
    },
    {
      title: "Weather Dashboard",
      desc: "Live weather app using OpenWeather API with charts.",
      img: "https://via.placeholder.com/300x200/F59E0B/ffffff?text=Weather",
      link: "https://weather-lalit.netlify.app",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-600">
              Lalit Parashar
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="text-gray-700 hover:text-blue-600 font-medium capitalize transition"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <ul className="px-4 py-3 space-y-2">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollTo(item)}
                      className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 capitalize font-medium"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white"
      >
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hello, I'm <span className="text-yellow-400">Lalit Parashar</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            A passionate Web Developer creating amazing user experiences.
          </p>
          <button
            onClick={() => scrollTo("projects")}
            className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-md font-semibold hover:scale-105 transition transform"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I'm a frontend developer with experience in HTML, CSS, JavaScript,
            React, and Tailwind. I love building responsive, beautiful, and fast
            websites.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "HTML5/SCSS", width: "90%" },
              { name: "JavaScript", width: "85%" },
              { name: "React", width: "45%" },
              { name: "Tailwind CSS", width: "75%" },
            ].map((skill, i) => (
              <div key={i} className="space-y-2">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-blue-600 transition-all duration-1000 ease-out ${
                      skillInView ? "translate-x-0" : "-translate-x-full"
                    }`}
                    style={{ width: skillInView ? skill.width : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-center mb-12 ">Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {projects.map((proj, i) => (
              <div
                key={i}
                className="bg-[pink] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                  <p className="text-gray-600 mb-4">{proj.desc}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    View Live
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + Contact Details */}
      <section
        id="contact"
        className="py-20  bg-gradient-to-br from-indigo-500 via-yellow-500 to-pink-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Details */}
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:lalitparashar@example.com"
                      className="text-blue-600 hover:underline"
                    >
                      lalitparashar06@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:+919982929882"
                      className="text-blue-600 hover:underline"
                    >
                      +91 9982929882
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">LinkedIn</p>
                    <a
                      href="www.linkedin.com/in/lalit-parashar-7b18b3155
"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      linkedin.com/in/lalitparashar
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">GitHub</p>
                    <a
                      href="https://github.com/lalitparashar06"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      github.com/lalitparashar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
