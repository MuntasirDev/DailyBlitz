import React from "react";
import NavBar from "../Componets/NavBar";

// Sample Career Data (Jobs)
const careerData = [
  {
    id: 1,
    title: "News Reporter",
    type: "Full-Time",
    location: "Dhaka, Bangladesh",
    description:
      "Cover breaking news, file timely reports, and perform on-the-ground interviews with accuracy and context.",
    responsibilities: [
      "Pitch, research, and write 3–5 short-to-medium news pieces per week",
      "Attend press briefings and field events; verify facts on site",
      "Maintain beat contacts and cultivate reliable sources",
      "Work with editors to refine copy and meet deadlines",
    ],
    requirements: [
      "Bachelor's degree in Journalism or related field",
      "2+ years reporting experience (internships count)",
      "Excellent interviewing and written communication skills",
      "Comfortable working flexible hours and breaking news shifts",
    ],
    benefits: [
      "Competitive salary + performance bonus",
      "Health allowance and field travel reimbursement",
      "Paid leave and professional training budget",
    ],
    apply: "Send CV, 2 samples of published work, and a short cover letter to careers@dailyblitz.com (subject: News Reporter)",
  },

  {
    id: 2,
    title: "Content Writer (Features & Longform)",
    type: "Part-Time / Freelance",
    location: "Remote",
    description:
      "Craft engaging features, human-interest stories, and long-form pieces that resonate with our audience.",
    responsibilities: [
      "Produce 1–2 feature articles per week (800–2,000 words)",
      "Conduct interviews and build narrative-driven stories",
      "Collaborate with editors on structure and fact-checking",
    ],
    requirements: [
      "Strong portfolio of longform writing",
      "Storytelling-first mindset and strong editing skills",
      "Familiarity with SEO best practices is a plus",
    ],
    benefits: [
      "Flexible schedule and remote work",
      "Competitive per-piece payment",
      "Publication credit and byline promotion",
    ],
    apply: "Submit portfolio links, two recent long-form samples, and rate expectations to careers@dailyblitz.com (subject: Content Writer)",
  },

  {
    id: 3,
    title: "Photojournalist",
    type: "Full-Time",
    location: "Chittagong / Dhaka (field work)",
    description:
      "Document news events, produce photo essays, and collaborate with reporters to create visual-first stories.",
    responsibilities: [
      "Shoot breaking news and feature assignments with speed and sensitivity",
      "Edit and deliver publish-ready images daily",
      "Maintain photo metadata and file organization",
      "Work with multimedia team on gallery and social-ready formats",
    ],
    requirements: [
      "Proven portfolio of news photography",
      "Experience with DSLR/Mirrorless cameras and editing software",
      "Able to travel on short notice and work in the field",
    ],
    benefits: [
      "Equipment stipend and travel reimbursement",
      "Opportunities for exhibition and editorial projects",
    ],
    apply: "Send portfolio (WeTransfer/Google Drive) + short CV to careers@dailyblitz.com (subject: Photojournalist)",
  },

  {
    id: 4,
    title: "Multimedia Producer (Video)",
    type: "Full-Time",
    location: "Dhaka, Bangladesh",
    description:
      "Produce short-form and documentary-style video for web and social platforms — from scripting to publishing.",
    responsibilities: [
      "Plan and shoot short explainers, news packages, and mini-documentaries",
      "Edit video, add graphics, and optimize for web/mobile",
      "Work with reporters to translate text stories into visual formats",
    ],
    requirements: [
      "Proficiency in video editing (Premiere/Final Cut) and motion graphics",
      "Showreel of previous work",
      "Understanding of social video best practices",
    ],
    benefits: [
      "Access to studio gear and editing suite",
      "Professional development budget",
    ],
    apply: "Include showreel link, short CV, and a 2-paragraph pitch for a sample video idea to careers@dailyblitz.com (subject: Multimedia Producer)",
  },

  {
    id: 5,
    title: "Fact-Checker / Researcher",
    type: "Contract / Part-Time",
    location: "Remote",
    description:
      "Support the newsroom by verifying factual claims, tracing source origins, and ensuring citations are accurate before publication.",
    responsibilities: [
      "Verify statistics, quotes, and source claims in drafts",
      "Find primary sources and archival references",
      "Maintain a verification log for published stories",
    ],
    requirements: [
      "Strong research skills and attention to detail",
      "Experience with public records, databases, or academic sources",
      "Ability to produce quick verification reports",
    ],
    benefits: [
      "Flexible hours and part-time pay model",
      "Chance to work across beats and learn investigative methods",
    ],
    apply: "Send CV and a short verification sample (1–2 pages) showing how you verified a claim to careers@dailyblitz.com (subject: Fact-Checker)",
  },

  {
    id: 6,
    title: "Social Media & Audience Editor",
    type: "Full-Time",
    location: "Remote / Dhaka",
    description:
      "Grow and engage our audience across platforms, design distribution strategies, and work with reporters to boost story reach.",
    responsibilities: [
      "Manage daily social publishing schedule and community replies",
      "Create platform-specific content hooks and distribution plans",
      "Track analytics and recommend optimizations",
    ],
    requirements: [
      "Proven experience running news or brand social accounts",
      "Strong copywriting and basic design skills",
      "Comfortable using analytics dashboards and A/B testing",
    ],
    benefits: [
      "Remote-friendly work and performance bonuses",
      "Training on audience growth tools",
    ],
    apply: "Share social account case study, CV, and sample captions to careers@dailyblitz.com (subject: Social Media Editor)",
  },
];

const Career = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
      {/* Header Section */}
      <NavBar></NavBar>
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-3 berkshire-swash-regular">
          Join The Daily Blitz Team
        </h1>
        <p className="text-accent text-sm md:text-base leading-relaxed">
          We are always looking for passionate storytellers, journalists, and creative minds to join
          our buzzing newsroom. If you want to be part of a fast-paced, truth-driven media family,
          explore our openings below.
        </p>
      </div>

      {/* Job Cards Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
        {careerData.map((job) => (
          <div key={job.id} className="card bg-base-100 shadow-xl p-6">
            <h2 className="text-xl font-bold mb-2 text-primary">{job.title}</h2>
            <div className="badge badge-secondary mb-3">{job.type}</div>
            <p className="text-sm text-accent mb-2">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-sm text-gray-600 mb-3">{job.description}</p>

            <p className="text-sm font-semibold mb-1">Requirements:</p>
            <ul className="list-disc ml-5 text-sm text-gray-700 mb-4">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>

            <button className="btn btn-secondary w-full">Apply Now</button>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="text-center mt-12 text-xs text-accent">
        Didn’t find a suitable role? Send your CV to
        <span className="font-semibold text-secondary"> careers@dailyblitz.com</span>
      </div>
    </div>
  );
};

export default Career;
