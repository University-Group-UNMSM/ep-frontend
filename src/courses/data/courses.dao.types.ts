import { AddCourseModel, CourseModel } from '../model';

export type CoursesResult = CourseModel[];
export type AddCourseResult = AddCourseModel;
export interface ICoursesDao {
  getCourses(token: string): Promise<CoursesResult>;
}

export interface Section {
  sectionId: string;
  sectionName: string;
  videoTitle: string;
  sectionUrl: string;
  sectionDescription: string;
  documentKeys: string; // Se asume que es una cadena separada por comas
}

export interface Course {
  courseId: string;
  courseTitle: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  bannerUrl: string;
  topicsCovered: string;
  learningOutcomes: string;
  courseOverview: string;
  targetAudience: string;
  userId: string;
  sections: Section[];
}
