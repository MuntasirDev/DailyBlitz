import React from "react";
import NavBar from "../Componets/NavBar";

// =======================
//   JOURNALIST TEAM DATA
// =======================
const teamData = [
  {
    role: "Chief Editor",
    name: "Aariz Rahman",
    bio: "Leads the editorial desk with strong commitment to accuracy, ethical reporting, and modern digital storytelling. Ensures every news piece meets global journalistic standards.",
    img: "https://img.icons8.com/?size=96&id=13042&format=png",
  },
  {
    role: "Senior Political Correspondent",
    name: "Maliha Chowdhury",
    bio: "Covers national and regional politics with investigative depth and sharp analytical perspectives. Recognized for her unbiased reporting and source-driven insights.",
    img: "https://img.icons8.com/?size=96&id=23256&format=png",
  },
  {
    role: "Technology Journalist",
    name: "Nafis Ahmed",
    bio: "Reports on innovation, startups, cybersecurity and the fast-changing tech landscape with evidence-based narratives and research-focused articles.",
    img: "https://img.icons8.com/?size=48&id=84020&format=png",
  },
  {
    role: "Sports Analyst",
    name: "Ridwan Hasan",
    bio: "Specializes in football, cricket, match breakdowns, and player analytics. Known for dynamic commentary and global sports coverage.",
    img: "https://img.icons8.com/?size=80&id=21441&format=png",
  },
  {
    role: "Investigative Reporter",
    name: "Ayesha Siddiqua",
    bio: "Works on long-form stories, social issues, and data-backed investigations. Dedicated to revealing facts responsibly and transparently.",
    img: "https://img.icons8.com/?size=100&id=31046&format=png",
  },
  {
    role: "Photojournalist",
    name: "Sadia Hossain",
    bio: "Captures impactful visual stories from the field—breaking news, human moments, and real-time events—with strong documentary elements.",
    img: "https://img.icons8.com/?size=96&id=23237&format=png",
  },
];


// =======================
//     ABOUT COMPONENT
// =======================
const About = () => {
  return (
    <div className="px-5 md:px-16 lg:px-28 py-12">
      <NavBar />

      {/* Title */}
      <h1 className="text-5xl berkshire-swash-regular text-primary mb-6 text-center drop-shadow-sm">
        The Daily Blitz
      </h1>

      {/* Intro */}
      <p className="text-center text-accent max-w-3xl mx-auto leading-7 mb-14">
        We are a modern digital newsroom committed to delivering verified,
        responsible, and fast news. Our team blends experience with youthful
        energy—bringing clarity in a world filled with misinformation.  
        Every story we publish follows a strict editorial workflow to ensure
        authenticity, neutrality, and transparency.
      </p>

      {/* Mission Block */}
      <div className="bg-base-200 p-8 rounded-2xl shadow-lg mb-14 border border-base-300">
        <h2 className="text-3xl font-semibold text-secondary mb-4">
          Our Mission
        </h2>
        <p className="text-accent leading-7">
          Our goal is to shape a reliable information space where readers get
         <strong> accurate, context-rich, and fact-checked reporting.</strong>  
          We aim to set a strong example in Bangladesh’s digital journalism
          through fast delivery without compromising truth.  
          From breaking headlines to analytical reports—we ensure every news item
          is researched, sourced, and verified.
        </p>
      </div>

      {/* What We Cover */}
      <div className="bg-base-200 p-8 rounded-2xl shadow-lg mb-14 border border-base-300">
        <h2 className="text-3xl font-semibold text-secondary mb-4">
          What We Cover
        </h2>
        <p className="text-accent leading-7 mb-5">
          Our newsroom covers a wide range of topics so readers stay informed
          from every angle:
        </p>

        <ul className="grid md:grid-cols-2 gap-3 text-accent">
          {[
            "National & Regional Politics",
            "Technology & Startup Scene",
            "Sports Analysis & Live Updates",
            "Economy & Business Insights",
            "Global Affairs & Diplomacy",
            "Human Stories & Features",
            "Investigative Reports",
            "Science, Climate & Future Trends",
          ].map((item, index) => (
            <li
              key={index}
              className="bg-base-300 py-2 px-4 rounded-lg border border-base-200"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Values */}
      <div className="mb-14">
        <h2 className="text-3xl font-semibold text-secondary mb-4">
          Editorial Values
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            "Accuracy & Source Verification",
            "Neutral, Unbiased Coverage",
            "Transparency & Accountability",
            "Speed + Responsibility",
            "Ethical & Human-Centered Journalism",
            "Zero Political or Commercial Influence",
          ].map((value, index) => (
            <div
              key={index}
              className="bg-base-200 p-5 rounded-xl border border-base-300 shadow-sm"
            >
              <p className="text-accent font-medium">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-4xl berkshire-swash-regular text-primary text-center mb-10">
        Meet The Newsroom
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
        {teamData.map((person, index) => (
          <div
            key={index}
            className="card bg-base-200 hover:shadow-2xl shadow-lg transition-all duration-300 rounded-2xl overflow-hidden border border-base-300"
          >
            <figure className="h-52 overflow-hidden flex justify-center items-center bg-base-300">
              <img
                src={person.img}
                alt={person.name}
                className="object-contain h-full p-5 transition-all duration-500 hover:scale-110"
              />
            </figure>

            <div className="card-body p-5">
              <h3 className="text-xl font-bold text-secondary">{person.name}</h3>
              <p className="font-medium text-primary mb-2">{person.role}</p>
              <p className="text-accent text-sm leading-6">{person.bio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="bg-base-200 p-8 rounded-2xl shadow-lg border border-base-300">
        <h2 className="text-3xl font-semibold text-secondary mb-4">
          Contact Us
        </h2>
        <p className="text-accent leading-8">
          <strong>Email (Editorial):</strong> contact@dailyblitz.com <br />
          <strong>Press & Media:</strong> press@dailyblitz.com <br />
          <strong>Corrections:</strong> corrections@dailyblitz.com
        </p>
      </div>
    </div>
  );
};

export default About;
