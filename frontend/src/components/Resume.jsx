import { useEffect, useState } from "react";
import { Mail, Github, Linkedin, Phone, MapPin, Download } from "lucide-react";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
    },
    profile: "A First Class computer science graduate seeking a career in AI and Data Science. Skilled in Python and SQL with hands-on experience of developing a mental health application using CNN and implementing AI technologies. Currently contributing to a generative manufacturing project powered by AI while learning more about vector databases, RAG and LLM through courses and personal projects.",
    education: [
      {
        school: "BSc Computer Science, The University of the West of England",
        location: "Bristol",
        period: "Sept 2023 - Jun 2025",
        details: "Graduated with First Class Honours"
      },
      {
        school: "International Year One in Computing, The University of the West of England, International College",
        location: "Bristol",
        period: "Sept 2022 - May 2023",
        details: "91% Overall, Pass with Distinction"
      }
    ],
    projects: [
      {
        title: "Autonomous Agents & Path Planning Simulation",
        period: "Sept 2024 - Jan 2025",
        details: [
          "Worked on a multi-agent robotic farming simulation using Mesa framework in Python.",
          "Implemented A* search algorithm to optimise robot movement and improve system efficiency.",
          "Built a dynamic environment, multi-agent interactions, and KPI-based performance results.",
          "Created a professional documentation on how the agents function, including analysis on how the agents improved via integrating the search algorithm"
        ]
      },
      {
        title: "Cybersecurity Data Analysis",
        period: "Sept 2024 - Dec 2025",
        details: [
          "Conducted cybersecurity investigations into network breaches, malware categorisation, and insider risks.",
          "Examined system logs and network traffic using scikit-learn, Pandas, and Python.",
          "Utilised visualisations and network graphs with Matplotlib, Seaborn, and NetworkX to identify unusual activity.",
          "Used Jupyter Notebook to deliver data-driven security insights"
        ]
      },
      {
        title: "Mental Health Monitoring Application with AI Integration",
        period: "Sept 2024 - Apr 2025",
        details: [
          "Developed a web-based facial expression recognition system for mental health monitoring using Agile Scrum practices.",
          "Built web interface with Streamlit (Python) for visualisation and user interaction.",
          "Implemented a Convolutional Neural Network (CNN) using PyTorch for emotion classification.",
          "Utilised OpenCV (Python) for real-time face detection and image preprocessing.",
          "Handled the FER-2013 dataset using Python for model training and evaluation, and PostgreSQL (SQL) for data storage and management.",
          "Applied strong time management and planning skills to meet project deadlines and document progress using MS Office tools, and designed the GUI using Figma.",
          "Presented the final product, demonstrating data analysis, research skills, evidence-based conclusions, and clear presentation skills"
        ]
      },
      {
        title: "Uni Hub Social Media",
        period: "Sept 2024 - May 2025",
        details: [
          "Collaborated in a team of 5 to design and develop a full-stack web platform for university students, using Agile practices and Jira for sprint tracking and task management.",
          "Built front end using React 18 (React 18, React Router, Tailwind CSS, shadcn).",
          "Designed and implemented back-end using Django 5 and Django REST Framework, with PostgreSQL as the database.",
          "Implemented authentication system using Django Sessions and Microsoft Login.",
          "Combined a FastAPI microservice with a pre-trained BERT model for spam detection.",
          "Managed media storage with Amazon S3 and handled background tasks using Celery and Redis.",
          "Used Docker to containerise frontend, backend and micro services.",
          "Presented the project results, showcasing strong communication, teamwork and presentation skills."
        ]
      },
      {
        title: "Critical Care Unit System",
        period: "Jan 2024 - May 2024",
        details: [
          "Collaborated in a 5-member Agile Scrum team to develop a healthcare management system, strengthening communication and teamwork skills.",
          "Organised and tracked development tasks across the team, managing follow-ups to keep implementation on schedule.",
          "Led back-end development and API creation using Python and Flask, including system testing.",
          "Built the front end using HTML, CSS, JavaScript, and Electron for desktop functionality",
          "Implemented data analytics and machine learning components in Python for patient monitoring, data analysis, and outcome prediction."
        ]
      }
    ],
    experience: [
      {
        title: "PAL Leader for UWEBIC IYO Computing, UWE University Library, Careers and Inclusivity – Library Services – PAL",
        location: "Bristol",
        period: "Aug 2024 - Jun 2025",
        details: [
          "Facilitated mentoring sessions in computing, supporting peers' learning and technical problem-solving.",
          "Developed leadership and communication skills while guiding students in projects and coursework"
        ]
      },
      {
        title: "Customer Services Assistant, Anadolija Transport",
        location: "Istanbul",
        period: "Feb 2019 - Aug 2022",
        details: [
          "Received and managed customer inquiries through phone calls and emails, resolved logistics issues and provided delivery updates.",
          "Coordinated with logistic team to improve efficiency, data reporting, and customer satisfaction.",
          "Used MS Office products (Excel, PowerPoint, Word) for tracking, analysis, and reporting."
        ]
      },
      {
        title: "Retail Volunteer, Barnado's Charity Shop",
        location: "Bristol",
        period: "Sept 2024 - May 2025",
        details: [
          "Assisted with stock organisation, sales, and fundraising events.",
          "Developed teamwork, interpersonal skills, and attention to detail in a work environment."
        ]
      }
    ],
    skills: {
      "Programming Languages": ["Python", "C/C++", "JavaScript", "SQL/NoSQL"],
      "Web Technologies": ["HTML", "CSS", "React", "Django", "Flask"],
      "AI & Machine Learning": ["PyTorch", "TensorFlow", "Keras", "CNN", "OpenCV", "Pandas", "Scikit-learn"],
      "Databases": ["PostgreSQL", "MongoDB", "Redis"],
      "Tools & DevOps": ["Docker", "Git", "Jupyter Notebook", "Figma", "MS Office", "Agile/Scrum"]
    },
    hobbies: [
      "Learning Emerging Technologies – Continuously exploring cloud, frameworks, trends in software and AI.",
      "Mentoring & Peer Support – Passionate about guiding others and sharing knowledge, particularly in technical subjects.",
      "Creative Culinary & DIY Enthusiast – Passionate about experimenting with recipes and cooking as a creative and relaxing outlet, while also enjoying hands-on DIY projects, from tech setups to physical builds."
    ]
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden px-6 lg:px-24 py-20 mt-20 bg-gradient-to-br from-gray-900 via-gray-900 to-black">
      {/* ANIMATED BACKGROUND BLOBS */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-600 rounded-full blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

      <div className="relative z-10 w-full max-w-4xl">

        {/* PRINTABLE RESUME CONTAINER */}
        <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* HEADER - DARK SECTION */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 md:px-12 py-8 md:py-10">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-1">{resumeData.name}</h1>
                <h2 className="text-xl text-yellow-400 font-semibold">{resumeData.title}</h2>
              </div>
              <div className="hidden md:block text-right">
                <a href="/Beyzanur_Kayaci_cv.pdf" download className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all">
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="border-t border-gray-700 pt-4 mt-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Phone size={14} />
                  <span>{resumeData.contact.phone}</span>
                </a>
                <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Mail size={14} />
                  <span className="break-all">{resumeData.contact.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  <span>{resumeData.contact.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm mt-3">
                <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="px-8 md:px-12 py-10 md:py-12 space-y-10">

            {/* PROFESSIONAL PROFILE */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-3 mb-4 uppercase tracking-widest">
                PROFILE
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {resumeData.profile}
              </p>
            </section>

            {/* EDUCATION */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-3 mb-6 uppercase tracking-widest">
                EDUCATION
              </h3>
              <div className="space-y-6">
                {resumeData.education.map((edu, idx) => (
                  <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{edu.school}</h4>
                        <p className="text-sm text-gray-600">{edu.period}</p>
                      </div>
                      <span className="text-sm text-gray-600 whitespace-nowrap ml-4">{edu.location}</span>
                    </div>
                    <p className="text-sm text-yellow-600 font-semibold">{edu.details}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ACADEMIC PROJECTS */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-3 mb-6 uppercase tracking-widest">
                ACADEMIC PROJECTS
              </h3>
              <div className="space-y-8">
                {resumeData.projects.map((project, idx) => (
                  <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{project.title}</h4>
                      </div>
                      <span className="text-sm text-gray-600 whitespace-nowrap ml-4">{project.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {project.details.map((detail, i) => (
                        <li key={i} className="flex gap-3 text-gray-700 text-sm">
                          <span className="text-yellow-500 font-bold mt-0.5 flex-shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* EMPLOYMENT HISTORY */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-3 mb-6 uppercase tracking-widest">
                EMPLOYMENT HISTORY
              </h3>
              <div className="space-y-8">
                {resumeData.experience.map((job, idx) => (
                  <div key={idx} className="pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-gray-800">{job.title}</h4>
                      </div>
                      <span className="text-sm text-gray-600 whitespace-nowrap ml-4">{job.period}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{job.location}</p>
                    <ul className="space-y-2">
                      {job.details.map((detail, i) => (
                        <li key={i} className="flex gap-3 text-gray-700 text-sm">
                          <span className="text-yellow-500 font-bold mt-0.5 flex-shrink-0">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* TECHNICAL SKILLS */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-3 mb-6 uppercase tracking-widest">
                TECHNICAL SKILLS
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(resumeData.skills).map((category, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wider">
                      {category[0]}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category[1].map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-yellow-100 text-gray-800 text-xs font-semibold rounded-full border border-yellow-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* HOBBIES */}
            <section>
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-400 pb-3 mb-4 uppercase tracking-widest">
                HOBBIES
              </h3>
              <ul className="space-y-3">
                {resumeData.hobbies.map((hobby, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700 text-sm">
                    <span className="text-yellow-500 font-bold mt-0.5 flex-shrink-0">•</span>
                    <span>{hobby}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* FOOTER */}
          <div className="bg-gray-50 px-8 md:px-12 py-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              © 2025 Beyzanur Kayaci • References available upon request
            </p>
          </div>

        </div>

        {/* DOWNLOAD BUTTON - MOBILE */}
        <div className="md:hidden mt-8 text-center">
          <a href="/Beyzanur_Kayaci_cv.pdf" download className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all">
            <Download size={20} />
            Download PDF
          </a>
        </div>

      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @media print {
          body {
            background: white;
          }
          .md\:block {
            display: block !important;
          }
          a[download] {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}