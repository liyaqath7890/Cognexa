export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Ananya Deshmukh",
    role: "Software Development Engineer",
    company: "Stripe",
    content: "The system design and MERN stack training at Cognexa Academy was a turning point for me. The focus on enterprise architectural patterns helped me ace my technical interviews. The mentor guidance is gold standard.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5
  },
  {
    id: "test-2",
    name: "Rohan Khanna",
    role: "Lead Software Architect",
    company: "Linear",
    content: "Cognexa School ERP transformed our institute operations. Daily logs, attendance calculations, fee lists, and report creation were fully automated. What used to take days now takes minutes.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5
  },
  {
    id: "test-3",
    name: "Samantha Wright",
    role: "Product Manager",
    company: "OpenAI",
    content: "The AI Recruit platform dramatically trimmed down our screening efforts. The semantic search sifts candidate capability matches without keyword matching constraints. Truly game-changing.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    rating: 5
  }
];
