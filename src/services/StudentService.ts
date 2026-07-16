export interface StudentProfile {
  name: string;
  email: string;
  avatar: string;
  id: string;
  joinedDate: string;
}

export interface EnrolledCourse {
  id: string;
  title: string;
  progress: number; // percentage (0-100)
  mentor: string;
  nextLesson: string;
  attendanceRate: number; // percentage
}

export interface ActiveInternship {
  id: string;
  title: string;
  status: "In Progress" | "Completed" | "Pending Review";
  duration: string;
  mentor: string;
  lorStatus: "Not Available" | "Issued" | "Requested";
}

export interface Assignment {
  id: string;
  title: string;
  courseTitle: string;
  dueDate: string;
  status: "Pending" | "Submitted" | "Graded";
  grade?: string;
}

export class StudentService {
  static async getProfile(): Promise<StudentProfile> {
    return {
      id: "STU-8872",
      name: "Alex Johnson",
      email: "alex.johnson@student.cognexa.com",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
      joinedDate: "Jan 12, 2026"
    };
  }

  static async getEnrolledCourses(): Promise<EnrolledCourse[]> {
    return [
      {
        id: "mern-stack",
        title: "Full Stack Development with MERN",
        progress: 68,
        mentor: "Dr. Aryan Sharma",
        nextLesson: "Module 3: Mongoose Complex Aggregations",
        attendanceRate: 92
      },
      {
        id: "react",
        title: "React 19 & Next.js Deep Dive",
        progress: 25,
        mentor: "Liam Chen",
        nextLesson: "Module 1: New Suspense Architecture",
        attendanceRate: 100
      }
    ];
  }

  static async getActiveInternships(): Promise<ActiveInternship[]> {
    return [
      {
        id: "industry-internship",
        title: "Enterprise Industry Internship",
        status: "In Progress",
        duration: "3 Months",
        mentor: "Dr. Aryan Sharma",
        lorStatus: "Requested"
      }
    ];
  }

  static async getAssignments(): Promise<Assignment[]> {
    return [
      {
        id: "assign-1",
        title: "Build MVC REST Server API",
        courseTitle: "Full Stack Development with MERN",
        dueDate: "July 20, 2026",
        status: "Pending"
      },
      {
        id: "assign-2",
        title: "React Hooks Optimization Challenge",
        courseTitle: "React 19 & Next.js Deep Dive",
        dueDate: "July 12, 2026",
        status: "Graded",
        grade: "A+"
      }
    ];
  }
}
