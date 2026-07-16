export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: "AI" | "Technology" | "Programming" | "Career" | "Industry News";
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export const blogs: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Shift to React 19: Why It Matters for Enterprise Apps",
    excerpt: "React 19 brings the React Compiler, server actions, and asset loading improvements. Discover how these updates optimize massive frontend codebases.",
    content: "Detailed post content regarding React 19 features...",
    category: "Programming",
    date: "July 10, 2026",
    author: "Liam Chen",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400"
  },
  {
    id: "blog-2",
    title: "Navigating AI Recruit: Semantic Search vs. Keyword Screening",
    excerpt: "Traditional ATS systems sift resumes by scanning strings. Learn how AI-powered semantic architectures match candidates based on contextual understanding.",
    content: "Detailed post content about AI recruiting systems...",
    category: "AI",
    date: "June 28, 2026",
    author: "Dr. Elena Rostova",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400"
  },
  {
    id: "blog-3",
    title: "Designing Scalable Multi-Tenant SaaS Databases",
    excerpt: "Explore the trade-offs between shared database setups, separated schemas, and fully isolated instances for B2B enterprise software.",
    content: "Detailed post about multi-tenancy...",
    category: "Technology",
    date: "June 15, 2026",
    author: "Dr. Aryan Sharma",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400"
  }
];
