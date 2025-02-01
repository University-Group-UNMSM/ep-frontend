import { AddCourseResult, Course, CourseDao, CoursesResult } from '../data';
import { ICourseService } from './course.service.types';

export class CourseService implements ICourseService {
  private dao: CourseDao;

  public constructor() {
    this.dao = CourseDao.getInstance();
  }

  public async getAllCourses(token: string): Promise<CoursesResult> {
    const courses = await this.dao.getCourses(token);
    return courses;
  }

  public async getDiscountedCourses(token: string): Promise<CoursesResult> {
    const courses = await this.dao.getCourses(token);
    const discountedCourses = courses.filter((course) => course.hasDiscount);
    return discountedCourses;
  }

  public async addCourse(data: Course, token: string): Promise<AddCourseResult> {
    const courses = await this.dao.addcourse(data, token);
    return courses;
  }
}
