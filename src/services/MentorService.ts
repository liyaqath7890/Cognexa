export interface MentorStudent {
  id: string;
  name: string;
  course: string;
  projectStatus: "Pending Feedback" | "Approved" | "In Review";
  attendance: number;
  lastActive: string;
}

export interface SubmissionToReview {
  id: string;
  studentName: string;
  projectName: string;
  courseTitle: string;
  submittedAt: string;
}

export class MentorService {
  static async getStudents(): Promise<MentorStudent[]> {
    return [
      { id: "STU-101", name: "Riya Sen", course: "Full Stack Development with MERN", projectStatus: "Pending Feedback", attendance: 95, lastActive: "2 hours ago" },
      { id: "STU-102", name: "Dev Patel", course: "Artificial Intelligence & Applied ML", projectStatus: "Approved", attendance: 88, lastActive: "1 day ago" },
      { id: "STU-103", name: "Zoe Miller", course: "React 19 & Next.js Deep Dive", projectStatus: "In Review", attendance: 91, lastActive: "Just now" }
    ];
  }

  static async getSubmissionsForReview(): Promise<SubmissionToReview[]> {
    return [
      { id: "sub-1", studentName: "Riya Sen", projectName: "Final Portfolio MVC Design", courseTitle: "Full Stack Development with MERN", submittedAt: "July 14, 2026" },
      { id: "sub-2", studentName: "Zoe Miller", projectName: "React Compiler Speed Test Setup", courseTitle: "React 19 & Next.js Deep Dive", submittedAt: "July 15, 2026" }
    ];
  }
}
