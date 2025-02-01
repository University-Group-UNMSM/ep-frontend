import { useEffect, useState } from 'react';

import { CoursesResult } from '../data';
import { CourseService } from '../service';
import { AuthService } from '@/auth/services/auth.service';

const courseService = new CourseService();
const authService = new AuthService();

export default function useCourses() {
  const [courses, setCourses] = useState<CoursesResult>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCourses = async () => {
    const token = authService.getToken();
    try {
      if (token) {
        const dataCourses = await courseService.getAllCourses(token);
        setCourses(dataCourses);
      } else {
        console.error('Token is null');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return { courses, loading };
}
