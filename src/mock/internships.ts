export interface InternshipTrack {
  id: string;
  title: string;
  duration: string;
  format: "Remote" | "In-office" | "Hybrid";
  eligibility: string;
  description: string;
  perks: string[];
  timeline: { step: string; description: string }[];
}

export const internships: InternshipTrack[] = [
  {
    id: "industry-internship",
    title: "Enterprise Industry Internship",
    duration: "3 - 6 Months",
    format: "Hybrid",
    eligibility: "B.Tech/BE/MCA/B.Sc computer science final/pre-final year students.",
    description: "Join the core development team at Cognexa. Work alongside senior engineers on production-grade client apps and internal SaaS products.",
    perks: [
      "Letter of Recommendation (LOR) from Tech Leads",
      "Stipend based on delivery performance",
      "Direct conversion opportunity to Full Time Employee (PPO)",
      "Daily standups and Scrum sprint cycles exposure"
    ],
    timeline: [
      { step: "Phase 1: Induction", description: "Learn git workflows, project structures, coding guidelines, and resolve starter issues." },
      { step: "Phase 2: Coding & Deployment", description: "Design modular API controllers, implement responsive state widgets, and write unit tests." },
      { step: "Phase 3: Final Delivery", description: "Perform code reviews, deploy to staging/production clusters, and draft the developer handbook." }
    ]
  },
  {
    id: "virtual-internship",
    title: "Self-Paced Virtual Internship",
    duration: "4 - 8 Weeks",
    format: "Remote",
    eligibility: "Any aspiring developer worldwide, basic coding knowledge requested.",
    description: "Learn building real-world projects with structured step-by-step guidance, weekly code reviews, and remote community support boards.",
    perks: [
      "Internship Certificate of Completion",
      "GitHub profile evaluation & resume enhancement guidance",
      "Structured video materials and code-along repositories",
      "Access to global slack boards with peers"
    ],
    timeline: [
      { step: "Week 1-2: Architecture Setup", description: "Bootstrap the application repository, map databases, and design layouts." },
      { step: "Week 3-4: Feature Complete", description: "Hook up form handlers, complete core features, and test integrations." },
      { step: "Week 5-8: Polish & Deploy", description: "Add SEO configs, write documentation readme, and deploy live on Netlify/Vercel." }
    ]
  },
  {
    id: "offline-internship",
    title: "Physical Co-Working Internship",
    duration: "3 Months",
    format: "In-office",
    eligibility: "Graduates or local university students capable of commuting to Pune/Bangalore office centers.",
    description: "Work in a fast-paced physical office. Coordinate directly with project managers and design teams to build scalable software solutions.",
    perks: [
      "Physical certificate presentation ceremony",
      "Co-working desk space, high-speed internet, and hardware access",
      "Mock interviews face-to-face with technical directors",
      "Soft skills training and corporate etiquette workshops"
    ],
    timeline: [
      { step: "Month 1: System Blueprint", description: "Collaborate in whiteboarding sessions. Draw system architectures and database blueprints." },
      { step: "Month 2: Core Development", description: "Rapid backend modeling, client-side binding, state synchronization, and integration tests." },
      { step: "Month 3: Review & Present", description: "Demo the system to the technical review board. Receive line-by-line code reviews." }
    ]
  }
];

export const internshipPerksDetailed = {
  placementGuidance: "Access to Cognexa's partner recruiter list. Direct referrals for high-performing interns.",
  mockInterviews: "1-on-1 interview simulations covering Data Structures, Algorithms, System Design, and Behavioral rounds.",
  resumeReviews: "Professional rewrite workshops. Learn how to highlight projects, metrics, and GitHub achievements.",
  lor: "A structured, personalized Letter of Recommendation highlighting your specific technical contributions."
};
