export interface CorporateEvent {
  id: string;
  title: string;
  date: string;
  type: "Webinar" | "Hackathon" | "Conference" | "Workshop";
  description: string;
  speaker: string;
  registrationUrl: string;
}

export const events: CorporateEvent[] = [
  {
    id: "event-1",
    title: "Cognexa DevCon 2026",
    date: "August 20, 2026",
    type: "Conference",
    description: "Annual Developer Summit mapping AI developments, SaaS architectures, and React 19 implementation guidelines.",
    speaker: "Dr. Aryan Sharma & Panels",
    registrationUrl: "https://forms.gle/devcon2026"
  },
  {
    id: "event-2",
    title: "MERN Stack Sprint Hackathon",
    date: "September 05, 2026",
    type: "Hackathon",
    description: "A 48-hour build-off where students launch real-world SaaS applications under mentor evaluations.",
    speaker: "Cognexa Academy Admins",
    registrationUrl: "https://forms.gle/mernhackathon"
  }
];
