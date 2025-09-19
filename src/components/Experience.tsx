import { motion } from "motion/react";
import { Calendar, MapPin, Building2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      id: 1,
      company: "PT. Danamas Insan Kreasi Andalan",
      position: "IT Programmer",
      location:
        "Jl. Bendungan Hilir No. 31A, RT. 1/RW. 3, Bend. Hilir, Central Jakarta City",
      period: "Feb 2025 - Present",
      type: "Full-time",
      description:
        "Handles client requests and needs directly. Performs bug fixes on running systems to maintain application stability. Responsible for performance enhancements and developing new features for PHP (CodeIgniter 3)-based applications.",
      skills: [
        "PHP",
        "CodeIgniter 3",
        "Bug Fixing",
        "Performance Optimization",
        "Client Relations",
      ],
      current: true,
    },
    {
      id: 2,
      company: "Self-Employed",
      position: "Freelancer UI/UX Designer",
      location: "Bandung",
      period: "Aug 2022 - Present",
      type: "Freelance",
      description:
        "Designs UI/UX for various digital projects (mobile and web). Involves user research, wireframing, prototyping, and design validation.",
      skills: [
        "UI/UX Design",
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Validation",
      ],
      projects: [
        "SuperApp Innovia",
        "PDAM Apps",
        "Doctor Volunteer Apps",
        "Edupas",
        "Multievent Apps",
        "E-Office Management",
        "Manut Kopi",
        "IEHUB",
        "Hamming99",
      ],
      current: true,
    },
    {
      id: 3,
      company: "PT Bejana Investidata Globalindo",
      position: "Front End Developer",
      location: "Bandung City",
      period: "August 2023 - December 2023",
      type: "Internship",
      description:
        "Involved in the real-life KIMIA FARMA project. Developed the user interface using HTML, CSS, and JavaScript. Collaborated with the product and QA teams for integration and testing.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "UI Development",
        "Team Collaboration",
        "QA Testing",
      ],
      current: false,
    },
    {
      id: 4,
      company: "PT. Karya Pintar Makmur",
      position: "Frontend Developer",
      location: "Jakarta, Indonesia",
      period: "June 2023 - August 2023",
      type: "Part-Time",
      description:
        "Worked on ERP system development. Created UI components and supported front-end functionality.",
      skills: [
        "Frontend Development",
        "ERP Systems",
        "UI Components",
        "System Integration",
      ],
      current: false,
    },
    {
      id: 5,
      company: "PT Bisa Artificial Indonesia",
      position: "UI UX Design",
      location:
        "South Jakarta City, Special Capital Region of Jakarta",
      period: "Feb 2023 - Jul 2023",
      type: "Independent Study",
      description:
        "Designed web interfaces for company projects. Focused on improving the user experience.",
      skills: [
        "UI/UX Design",
        "Web Interface Design",
        "User Experience",
        "Design Systems",
      ],
      current: false,
    },
    {
      id: 6,
      company: "PT Pilihanmu Indonesia Jaya",
      position: "UI UX Design",
      location: "South Jakarta, Indonesia",
      period: "Feb 2022 - Aug 2022",
      type: "Internship",
      description:
        "Assisted in designing the PilihJurusan website. Collaborated with the development and product teams.",
      skills: [
        "UI/UX Design",
        "Website Design",
        "Team Collaboration",
        "Product Development",
      ],
      current: false,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey spans across various roles
            in UI/UX design and frontend development, working
            with startups and established companies to create
            meaningful digital experiences.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#A8C5E6] via-[#D7C7E9] to-[#A8C5E6] hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-[#ff6b35] rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="md:pl-20">
                  <div className="bg-gradient-to-br from-[#F4F4F6] to-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-medium text-gray-900">
                            {experience.position}
                          </h3>
                          {experience.current && (
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              Current
                            </span>
                          )}
                          <span
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              experience.type === "Full-time"
                                ? "bg-blue-100 text-blue-700"
                                : experience.type ===
                                    "Freelance"
                                  ? "bg-purple-100 text-purple-700"
                                  : experience.type ===
                                      "Part-Time"
                                    ? "bg-orange-100 text-orange-700"
                                    : experience.type ===
                                        "Internship"
                                      ? "bg-gray-100 text-gray-700"
                                      : "bg-indigo-100 text-indigo-700"
                            }`}
                          >
                            {experience.type}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-[#ff6b35] font-medium mb-2">
                          <Building2 className="w-4 h-4" />
                          {experience.company}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {experience.description}
                    </p>

                    {experience.projects && (
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-gray-900 mb-3">
                          Key Projects:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.projects.map(
                            (project, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-3 py-1 bg-[#A8C5E6]/20 text-gray-700 rounded-full"
                              >
                                {project}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        Skills & Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1 bg-[#D7C7E9]/30 text-gray-700 rounded-full border border-[#D7C7E9]/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}