import { courses, CourseData } from '@/mock/courses';

export class CourseService {
  static async getAllCourses(): Promise<CourseData[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(courses), 100);
    });
  }

  static async getCourseById(id: string): Promise<CourseData | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = courses.find(c => c.id === id);
        resolve(item);
      }, 100);
    });
  }
}
