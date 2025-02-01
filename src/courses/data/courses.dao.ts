import { AddCourseResult, Course, CoursesResult, ICoursesDao } from './courses.dao.types';

export class CourseDao implements ICoursesDao {
  private static instance: CourseDao;

  private constructor() {
    if (CourseDao.instance) {
      throw new Error('Course Dao is a Singleton Pattern class. Use CourseDao.getInstance()');
    }
  }

  public static getInstance(): CourseDao {
    if (!CourseDao.instance) {
      CourseDao.instance = new CourseDao();
    }
    return CourseDao.instance;
  }

  public async getCourses(token: string): Promise<CoursesResult> {
    const response = await fetch(
      'https://31pmac34g6.execute-api.us-east-1.amazonaws.com/v1/course/teacher/dd27bab1-be6c-4dc5-aea5-27e88f6c5fe1',
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      },
    );
    return response.json() as Promise<CoursesResult>;
  }

  public async addcourse(data: Course, token: string): Promise<AddCourseResult> {
    const response = await fetch('https://31pmac34g6.execute-api.us-east-1.amazonaws.com/v1/course', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    return response.json() as Promise<AddCourseResult>;
  }
}
