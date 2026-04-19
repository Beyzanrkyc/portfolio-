import { useEffect, useRef, useState } from "react";
import { X, Download, ExternalLink, Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const skillsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  const resumeData = {
    name: "BEYZANUR KAYACI",
    title: "AI & Full-Stack Developer",
    contact: {
      phone: "+447936870714",
      email: "beyzanuryc.bk@gmail.com",
      location: "Bracknell, United Kingdom",
      linkedin: "https://www.linkedin.com/in/beyzanurkayaci/",
      github: "https://github.com/Beyzanryc"
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-start justify-center overflow-hidden px-6 lg:px-24"
      style={{ paddingTop: '120px' }}
    >

      {/* BLOBS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-yellow-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-6xl w-full space-y-28 mt-20">

        {/* HERO */}
        <div className="grid lg:grid-cols-5 gap-12 items-center" >

          <div className={`lg:col-span-3 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="text-yellow-400">Me</span>
            </h1>

            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              I'm a First-Class Computer Science graduate specialising in AI and data-driven systems.
              I build intelligent applications that combine machine learning with scalable full-stack architecture.
            </p>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              My work includes developing a CNN-based mental health monitoring system,
              multi-agent simulations, and full-stack platforms using React, Django, and PostgreSQL.
              I'm currently working on <span className="text-yellow-400">MediFlow</span>,
              an AI-powered healthcare workflow system.
            </p>
 
          </div>

          <div className={`lg:col-span-2 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-x-20"}`}>
            <img src="/C12.png" className="animate-float" />
          </div>
        </div>

        {/* JOURNEY */}
        <section className="max-w-4xl" style={{ marginBottom: '6rem' }}>
          <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>

          <p className="text-slate-300 mb-4">
            I started my journey studying Computer Science, where I developed a strong foundation
            in programming, algorithms, and data systems.
          </p>

          <p className="text-slate-300 mb-4">
            During my degree, I focused on AI and machine learning—building projects such as a
            facial expression recognition system using CNNs and real-time computer vision.
          </p>

          <p className="text-slate-300">
            I've since expanded into full-stack development and backend systems, combining AI with
            scalable architectures to build real-world applications.
          </p>
        </section>

        {/* TIMELINE */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="text-3xl font-bold text-white mb-10">Timeline</h2>

          <div className="border-l border-yellow-500/20 pl-6 space-y-10">
            {[
              { year: "2022", title: "Started CS Degree" },
              { year: "2023", title: "Full-Stack Development" },
              { year: "2024", title: "AI & ML Projects (CNN, BERT)" },
              { year: "2025", title: "MediFlow + Advanced Systems" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[34px] w-4 h-4 bg-yellow-400 rounded-full"></div>

                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <span className="text-yellow-400 text-sm">{item.year}</span>
                  <h3 className="text-white font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section ref={skillsRef} className="max-w-4xl" style={{ marginBottom: '6rem' }}>
          <h2 className="text-3xl font-bold text-white mb-10">Skills</h2>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: "Python & AI" },
              { name: "React & Frontend" },
              { name: "Django & APIs" },
              { name: "SQL / Databases" },
              { name: "Machine Learning" },
            ].map((skill, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-yellow-400/20 transition-all duration-300">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-slate-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* HOBBIES */}
        <section style={{ marginBottom: '6rem' }}>
          <h2 className="text-3xl font-bold text-white mb-10">
            Hobbies & Interests
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Gaming",
                desc: "Strategy, story-driven and competitive games that improve problem-solving."
              },
              {
                title: "Mentoring",
                desc: "Helping others learn programming and build confidence in tech."
              },
              {
                title: "Cooking",
                desc: "Experimenting with recipes as a creative and relaxing outlet."
              },
              {
                title: "Art & DIY",
                desc: "Hands-on creative projects, from tech setups to physical builds."
              },
              {
                title: "Illustration & Animation",
                desc: "Exploring visual storytelling and digital creative design."
              },
              {
                title: "Reading, Anime & Movies",
                desc: "Enjoying storytelling, world-building, and character-driven narratives."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:bg-white/10 transition hover:-translate-y-1"
              >
                <h3 className="text-yellow-400 font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* RESUME */}
        <section className="max-w-4xl" style={{ marginBottom: '6rem' }}>
          <h2 className="text-3xl font-bold text-white mb-6">
            Resume
          </h2>

          <p className="text-slate-300 mb-8 leading-relaxed">
            You can view or download my full CV which includes my education,
            technical experience, AI projects, and full-stack development work.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsResumeModalOpen(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-yellow-500/30 text-center inline-flex items-center justify-center gap-2"
            >
              <ExternalLink size={18} />
              View Resume
            </button>

            <a
              href="/Beyzanur_Kayaci_cv.pdf"
              download
              className="border border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-6 py-3 rounded-lg font-medium transition text-center inline-flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </section>

      </div>

      {/* RESUME MODAL */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 transition-all duration-300 animate-fade-in">
            
            {/* MODAL HEADER */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 md:px-10 py-8 flex justify-between items-start rounded-t-2xl">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">{resumeData.name}</h2>
                <p className="text-lg text-yellow-400 font-semibold mt-2">{resumeData.title}</p>
              </div>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="px-6 md:px-10 py-8 overflow-y-auto max-h-[calc(100vh-200px)]">
              
              {/* CONTACT INFO */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex flex-wrap gap-4 text-sm">
                  <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors">
                    <Phone size={16} />
                    {resumeData.contact.phone}
                  </a>
                  <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors">
                    <Mail size={16} />
                    {resumeData.contact.email}
                  </a>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={16} />
                    {resumeData.contact.location}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm mt-3">
                  <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors">
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-yellow-600 transition-colors">
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* PROFILE */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2 mb-3 uppercase">Profile</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  A First Class computer science graduate seeking a career in AI and Data Science. Skilled in Python and SQL with hands-on experience of developing a mental health application using CNN and implementing AI technologies. Currently contributing to a generative manufacturing project powered by AI while learning more about vector databases, RAG and LLM through courses and personal projects.
                </p>
              </div>

              {/* QUICK STATS */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 uppercase font-bold">Education</p>
                  <p className="text-gray-800 font-semibold mt-1">First Class Honours</p>
                  <p className="text-xs text-gray-600">Computer Science</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 uppercase font-bold">Expertise</p>
                  <p className="text-gray-800 font-semibold mt-1">AI & ML</p>
                  <p className="text-xs text-gray-600">Full-Stack Development</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600 uppercase font-bold">Location</p>
                  <p className="text-gray-800 font-semibold mt-1">UK</p>
                  <p className="text-xs text-gray-600">Available for Opportunities</p>
                </div>
              </div>

              {/* KEY PROJECTS */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2 mb-4 uppercase">Key Projects</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Mental Health Monitoring Application</strong> - CNN-based facial expression recognition using PyTorch and OpenCV</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Uni Hub Social Media</strong> - Full-stack platform with React, Django, PostgreSQL, and BERT integration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Autonomous Agents Simulation</strong> - Multi-agent system using Mesa framework and A* algorithm</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span><strong>Cybersecurity Data Analysis</strong> - Network breach investigation using scikit-learn and visualization tools</span>
                  </li>
                </ul>
              </div>

              {/* SKILLS PREVIEW */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-2 mb-4 uppercase">Technical Skills</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-bold text-gray-800 mb-2">Languages & Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "React", "Django", "JavaScript", "TypeScript"].map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-yellow-100 text-gray-800 rounded-full text-xs font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-2">AI & ML</p>
                    <div className="flex flex-wrap gap-2">
                      {["PyTorch", "TensorFlow", "CNN", "OpenCV", "Pandas"].map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-yellow-100 text-gray-800 rounded-full text-xs font-semibold">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* MODAL FOOTER */}
            <div className="border-t border-gray-200 px-6 md:px-10 py-4 bg-gray-50 rounded-b-2xl flex gap-3">
              <a
                href="/Beyzanur_Kayaci_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors"
              >
                <ExternalLink size={18} />
                View Full Resume
              </a>
              <a
                href="/Beyzanur_Kayaci_cv.pdf"
                download
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-semibold rounded-lg transition-colors"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        @keyframes blob {
          0%,100%{transform:translate(0,0) scale(1);}
          33%{transform:translate(30px,-50px) scale(1.1);}
          66%{transform:translate(-20px,20px) scale(0.9);}
        }
        .animate-blob{animation:blob 7s infinite;}
        .animation-delay-2000{animation-delay:2s;}
        .animation-delay-4000{animation-delay:4s;}

        @keyframes float {
          0%,100%{transform:translateY(0);}
          50%{transform:translateY(-20px);}
        }
        .animate-float{animation:float 3s ease-in-out infinite;}

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>

    </section>
  );
}