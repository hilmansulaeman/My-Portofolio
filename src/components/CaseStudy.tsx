import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Target, Lightbulb, CheckCircle, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyProps {
  project: any;
  onBack: () => void;
}

export function CaseStudy({ project, onBack }: CaseStudyProps) {
  if (!project) return null;

  const isPilihJurusan = project.id === 1 || project.title === "Pilih Jurusan";
  const isEdupas = project.title === "EDUPAS";
  const isManutKopi = project.title === "Manut Kopi";
  const isInnoviaHrm = project.title === "Innovia HRM";
  const isEventRun = project.title === "Event Run by Innovia";
  const isInmedFood = project.title === "InmedFood";
  const isUrbanmenphoto = project.title === "Urbanmenphoto";
  const projectDuration = isPilihJurusan
    ? "6 Months"
    : isEdupas
      ? "5 Months"
      : isManutKopi
        ? "1.5 Years"
        : isInnoviaHrm
          ? "2 Months"
          : isEventRun
            ? "1 Month"
            : isInmedFood
              ? "4 Weeks"
              : isUrbanmenphoto
                ? "—"
              : "1 Year";

  const processSteps = isPilihJurusan
    ? [
        { title: "Research & Discovery", description: "Reviewing the existing company profile, audience needs, and project goals.", duration: "1 Month" },
        { title: "Information Architecture", description: "Structuring services, benefits, and conversion paths for students and school partners.", duration: "1 Month" },
        { title: "UI/UX Design", description: "Creating responsive page layouts, visual direction, and reusable interface patterns.", duration: "2 Months" },
        { title: "Prototype & Iteration", description: "Refining key journeys and interactions based on design review and feedback.", duration: "1 Month" },
        { title: "Final Design Handoff", description: "Preparing final screens, specifications, and design assets for implementation.", duration: "1 Month" },
      ]
    : isEdupas
      ? [
          { title: "Research & Discovery", description: "Understanding student learning needs and campus event journeys.", duration: "1 Month" },
          { title: "Information Architecture", description: "Organising learning content, academic activities, and campus events into one platform.", duration: "1 Month" },
          { title: "UI/UX Design", description: "Designing responsive learning, event discovery, and registration experiences.", duration: "2 Months" },
          { title: "Prototype & Design Handoff", description: "Validating key flows and preparing final design documentation.", duration: "1 Month" },
        ]
        : isInnoviaHrm
          ? [
            { title: "Research & Workflow Mapping", description: "Mapping core HR processes, user roles, and employee data needs.", duration: "2 Weeks" },
            { title: "Wireframing & Information Architecture", description: "Structuring dashboards, employee records, and HR workflows.", duration: "2 Weeks" },
            { title: "UI Design & Prototyping", description: "Creating role-based interfaces, reusable components, and key task flows.", duration: "1 Month" },
            { title: "Final Design Handoff", description: "Finalising screens, interaction notes, and design specifications.", duration: "2 Weeks" },
          ]
        : isEventRun
          ? [
              { title: "Scope & User Flow", description: "Defining the event discovery, information, and registration journeys.", duration: "1 Week" },
              { title: "Information Architecture", description: "Structuring event listings, schedules, and event detail content.", duration: "1 Week" },
              { title: "UI Design", description: "Creating the event dashboard, listing, detail, and registration screens.", duration: "1 Week" },
              { title: "Prototype & Design Handoff", description: "Refining key flows and preparing final screens for implementation.", duration: "1 Week" },
            ]
        : isInmedFood
          ? [
              { title: "Research & User Flow", description: "Understanding UMKM food ordering needs and customer purchase journeys.", duration: "1 Week" },
              { title: "Information Architecture", description: "Structuring the menu, product discovery, cart, and order flow.", duration: "1 Week" },
              { title: "UI Design", description: "Creating a mobile-first interface for customers and food UMKM.", duration: "1 Week" },
              { title: "Prototype & Design Handoff", description: "Refining key interactions and preparing final designs for implementation.", duration: "1 Week" },
            ]
        : isUrbanmenphoto
          ? [
              { title: "User Journey Mapping", description: "Mapping the self-service flow from instructions and payment through photo capture, editing, printing, and sharing.", duration: "" },
              { title: "Kiosk-First Experience", description: "Designing a full-screen touch experience with large actions, short instructions, and session-time guidance.", duration: "" },
              { title: "Photo Editor", description: "Creating controls for layouts, photo slots, transforms, filters, frames, and GIF preparation.", duration: "" },
              { title: "Digital & Physical Output", description: "Connecting final photos to gallery links, QR codes, downloads, sharing, and print-ready output.", duration: "" },
              { title: "Operational System", description: "Designing the admin dashboard for sessions, payments, galleries, frames, reports, and booth monitoring.", duration: "" },
            ]
        : isManutKopi
          ? [
              { title: "Research & Discovery", description: "Understanding café operations, ordering patterns, and staff needs.", duration: "2 Months" },
              { title: "User Flow & Information Architecture", description: "Mapping master data, cashier transactions, and customer ordering flows.", duration: "3 Months" },
              { title: "UI Design System", description: "Designing the POS interface, digital menu, and reusable component system.", duration: "7 Months" },
              { title: "Prototyping & Iteration", description: "Refining the experience through operational scenarios and design review.", duration: "4 Months" },
              { title: "Final Design Handoff", description: "Preparing final design files, specifications, and assets for implementation.", duration: "2 Months" },
            ]
          : [
              { title: "Research & Discovery", description: "Understanding user needs, market analysis, and defining project scope", duration: "1 - 2 Months" },
              { title: "Ideation & Wireframing", description: "Brainstorming solutions, creating user flows, and low-fidelity prototypes", duration: "2 - 3 Weeks" },
              { title: "Design & Prototyping", description: "High-fidelity designs, interactive prototypes, and design system creation", duration: "1.5 - 2 Months" },
              { title: "Testing & Iteration", description: "User testing, feedback collection, and design refinements", duration: "1 Month" },
              { title: "Development & Launch", description: "Implementation support, quality assurance, and project delivery", duration: "2 - 3 Months" },
            ];

  const keyMetrics = [
    { label: "Project Duration", value: projectDuration },
    { label: "Team Size", value: isInmedFood ? "3 People" : isUrbanmenphoto ? "—" : "1 Person" },
    { label: "User Testing Sessions", value: "5" },
    { label: "Design Iterations", value: "3" }
  ];

  const results = isUrbanmenphoto
    ? [
        "A structured self-service photobooth flow that reduces operator dependency.",
        "Personalized photo results through layouts, frames, filters, and composition controls.",
        "Gallery links and QR codes that keep photos accessible after the booth session.",
        "Admin visibility across sessions, payments, galleries, booth status, and frame usage.",
        "Event-ready operations with custom frames, printing support, and local recovery fallback.",
      ]
    : [
        "Improved user engagement by 45%",
        "Reduced user onboarding time by 60%",
        "Increased conversion rate by 32%",
        "Enhanced user satisfaction score to 4.8/5",
      ];

  const lessons = isPilihJurusan
    ? {
        workedWell:
          "Redesigning the company profile clarified how Pilih Jurusan helps students identify their interests and potential. Presenting the platform's assessment services, benefits, and pathways for school partners in a more structured way made the value proposition easier to understand.",
        improvement:
          "More usability validation with students, parents, and school representatives would help refine content hierarchy, language, and calls to action for each audience. Testing earlier with real users would also provide stronger insight into their decision-making journey.",
        future:
          "The website can continue to evolve through ongoing content updates, stronger case studies, and clearer conversion paths for prospective students and school partners. Monitoring user behaviour will help optimise the experience as the platform grows.",
      }
    : isEdupas
      ? {
          workedWell:
            "Combining learning activities and campus events in one platform made it easier for students to access academic resources while staying informed about campus life. Separating learning content from event discovery through a clear hierarchy kept both journeys easy to understand.",
          improvement:
            "Earlier usability testing with students and campus administrators would help refine the event discovery, registration, and notification flows. Testing different academic schedules would also reveal opportunities to make important updates easier to find.",
          future:
            "EDUPAS can be enhanced with real-time announcements, calendar synchronization, personalised event recommendations, and attendance insights. These additions would help students manage academic activities and campus events more effectively.",
        }
      : isInnoviaHrm
        ? {
            workedWell:
              "Organising employee data and daily HR workflows into role-based dashboards gave HR teams a clearer view of operations while making routine tasks easier for employees to complete. Clear information grouping helped reduce complexity across the platform.",
            improvement:
              "Earlier validation with a wider range of HR roles and employees would help refine approval flows, permissions, and reporting needs. More testing with real organisational data would also reveal edge cases in everyday HR processes.",
            future:
              "Innovia HRM can evolve with deeper workforce analytics, automated reminders, more flexible reporting, and additional employee self-service features. These improvements would support more proactive and data-informed HR operations.",
          }
      : isEventRun
        ? {
            workedWell:
              "Focusing the interface on event discovery, schedules, and registration created a clear path for participants to find the information they needed. A consistent event card and detail structure also made the platform easier to scan.",
            improvement:
              "Earlier validation with event organisers and participants would help refine the priority of event information, reminders, and registration states. Testing more event types would also improve the flexibility of the interface.",
            future:
              "Event Run can be extended with real-time announcements, calendar integration, participant attendance tracking, and post-event feedback. These features would support a more complete event experience for organisers and attendees.",
          }
      : isInmedFood
        ? {
            workedWell:
              "Focusing the experience on digital menus, product discovery, and a simple ordering flow made the platform easy to understand for both customers and food UMKM. A mobile-first layout also supported the way customers commonly browse and order food.",
            improvement:
              "Earlier testing with a wider range of UMKM owners would help refine operational needs such as menu updates, order status, and promotional content. More customer testing could also improve product discovery and checkout decisions.",
            future:
              "InmedFood can grow with order tracking, payment integration, promotional tools, and simple business insights for UMKM owners. These features would help merchants manage daily operations and build stronger customer relationships.",
          }
      : isUrbanmenphoto
        ? {
            workedWell:
              "A guided kiosk wizard made the photobooth flow easier to complete without an operator, while layout, frame, filter, and GIF options gave users a more personal result. Gallery links and QR codes also extended the experience beyond the booth.",
            improvement:
              "Kiosk flows need to prioritise clarity over feature volume. Session time limits and local recovery are essential to prevent queues and maintain a reliable experience when a user leaves a session or the network becomes unstable.",
            future:
              "The next iteration should measure real operating metrics such as session volume, payment success, downloads, average session time, and premium frame usage. These insights can guide improvements for events, campaigns, weddings, and corporate activations.",
          }
    : {
        workedWell:
          "The implementation of an integrated POS system with a structured digital menu and real-time order processing successfully improved ordering efficiency and reduced customer wait times. Early validation of user needs helped ensure the solution addressed real operational challenges at Manut Kopi.",
        improvement:
          "Further usability testing in real operational conditions could have been conducted earlier to better handle peak-hour scenarios. Additionally, more exploration of edge cases, such as high traffic and order conflicts, would improve system robustness.",
        future:
          "The POS system can be further enhanced by adding features such as customer order tracking, integrated payment methods, and analytics dashboards for business insights. Continuous optimization of performance and user flow will be essential as usage scales.",
      };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F4F4F6] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-8 p-2 hover:bg-gray-100 rounded-xl transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Button>

            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6">
                {project.title}
              </h1>
              <div className="w-16 h-1 bg-[#ff6b35] mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {project.tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="bg-[#A8C5E6] text-gray-800">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {project.client}
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {project.category}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-12"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-medium text-gray-900">Goal</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.goal}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-medium text-gray-900">Challenge</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#ff6b35]" />
                <h2 className="text-2xl font-medium text-gray-900">Solution</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#A8C5E6]/10 to-[#D7C7E9]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Project Metrics
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key numbers that showcase the project's scope and impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="text-center bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="text-3xl font-medium text-[#ff6b35] mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Design Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {(isPilihJurusan || isEdupas || isInnoviaHrm || isEventRun || isInmedFood || isUrbanmenphoto || isManutKopi)
                ? "A design-only process from research through final design handoff"
                : "A structured approach to deliver exceptional user experiences"}
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#ff6b35] text-white rounded-xl flex items-center justify-center font-medium">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-medium text-gray-900">
                      {step.title}
                    </h3>
                    <div className="text-sm text-gray-500 mt-1 md:mt-0">
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F4F4F6] to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Results & Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable outcomes that demonstrate the project's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{result}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Learned */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              Lessons Learned
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {isPilihJurusan
                ? "Key insights from redesigning Pilih Jurusan's company profile."
                : isEdupas
                  ? "Key insights from designing EDUPAS for learning and campus events."
                  : isInnoviaHrm
                    ? "Key insights from designing Innovia HRM for everyday HR operations."
                    : isEventRun
                      ? "Key insights from designing Event Run for event discovery and registration."
                      : isInmedFood
                        ? "Key insights from designing InmedFood for food UMKM."
                        : isUrbanmenphoto
                          ? "Key insights from designing a self-service photobooth kiosk and admin system."
                        : "Key insights and takeaways from this project"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="bg-gradient-to-r from-[#A8C5E6]/10 to-[#D7C7E9]/10 rounded-2xl p-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  What Worked Well
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {lessons.workedWell}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Areas for Improvement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {lessons.improvement}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Future Considerations
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {lessons.future}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#F4F4F6] to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Let's work together to create something amazing. Get in touch to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={onBack}
                className="bg-gray-900 text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300"
              >
                View More Projects
              </Button>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="px-8 py-4 rounded-xl border-gray-300 hover:bg-gray-50 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
