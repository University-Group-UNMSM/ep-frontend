import { CourseModel, AddCourseModel, Section } from './courses.model.types';

export class Course implements CourseModel {
  courseId: string = '';
  courseTitle: string = '';
  description: string = '';
  price: number = 0;
  discount: number = 0;
  category: string = '';
  bannerUrl: string = '';
  topicsCovered: string = '';
  learningOutcomes: string = '';
  courseOverview: string = '';
  targetAudience: string = '';
  userId: string = '';
  sections: Section[] = [];

  public constructor(course: CourseModel) {
    Object.assign(this, { ...course });
  }

  public get hasDiscount(): boolean {
    return this.discount > 0;
  }

  public get priceWithDiscount(): number {
    return this.price - (this.price * this.discount) / 100;
  }
}

export class AddCourse implements AddCourseModel {
  message: string = '';
  courseId: string = '';
}
