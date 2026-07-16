export interface GameItem {
  id: string;
  title: string;
  category: "Puzzle" | "Runner" | "Educational" | "Arcade";
  description: string;
  status: "Coming Soon" | "Alpha Test" | "Beta Live";
  techStack: string[];
}

export const games: GameItem[] = [
  {
    id: "candy-crush",
    title: "Syntax Connect (Match-3)",
    category: "Puzzle",
    description: "Align data structures, matching strings and object arrays to clear code syntax compiler bugs.",
    status: "Coming Soon",
    techStack: ["React 19", "Canvas API", "Framer Motion"]
  },
  {
    id: "runner-game",
    title: "Docker Dash (Runner)",
    category: "Runner",
    description: "Navigate containers past server crashes, network outages, and CPU leaks to deliver microservices.",
    status: "Coming Soon",
    techStack: ["Three.js", "R3F", "Physics Engine"]
  },
  {
    id: "educational-game",
    title: "Git Merge Conflicts (Strategy)",
    category: "Educational",
    description: "Resolve complex merge conflicts under time limits, routing branches and rebasing trees.",
    status: "Coming Soon",
    techStack: ["TypeScript", "SVG Engine"]
  }
];
