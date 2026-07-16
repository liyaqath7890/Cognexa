export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const team: TeamMember[] = [
  {
    id: "member-1",
    name: "Dr. Aryan Sharma",
    role: "Founder & Chief Architect",
    department: "Executive",
    bio: "Ex-Google Staff Engineer. Specialist in Large Scale Distributed Architectures, Database Multi-tenancy and AI models.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200",
    linkedin: "https://linkedin.com/in/draryansharma"
  },
  {
    id: "member-2",
    name: "Dr. Elena Rostova",
    role: "Director of AI Innovation",
    department: "R&D",
    bio: "Ph.D. in Deep Learning. Creator of Cognexa's semantic parsing recruit engine.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200",
    linkedin: "https://linkedin.com/in/elenarostova"
  },
  {
    id: "member-3",
    name: "Liam Chen",
    role: "Staff Frontend Engineer",
    department: "Engineering",
    bio: "Creative Developer specializing in WebGL, Three.js, React, and UX interaction engineering.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200",
    linkedin: "https://linkedin.com/in/liamchen"
  }
];
