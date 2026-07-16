import { blogs, BlogPost } from '@/mock/blogs';

export class BlogService {
  static async getAllBlogs(): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(blogs), 100);
    });
  }

  static async getBlogsByCategory(category: string): Promise<BlogPost[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const list = blogs.filter(b => b.category.toLowerCase() === category.toLowerCase());
        resolve(list);
      }, 100);
    });
  }
}
