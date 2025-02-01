import { Course } from '@/courses/model';
import OcIcon from '../oc-icon';
import './oc-course-card.scss';
import Image from 'next/image';
interface OcCourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: OcCourseCardProps) {
  const logoImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUK8ZpL49DLmblSpsAQWpd9obpf02Id4LtVA&s';
  return (
    <div className="course-card oc-gap-medium oc-padding-large oc-shape-large cursor-pointer shadow-md">
      <div className="course-card-image">
        <Image
          className="sidebar-logo"
          src={course.bannerUrl}
          alt="sidebar-logo"
          width={1200}
          height={500}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div className="oc-gap-medium flex flex-col justify-between">
        <p className="oc-typo-body-medium course-card-name">{course.courseTitle}</p>

        <div className="oc-typo-body-small flex items-center justify-between">
          <div className="oc-gap-medium flex items-center">
            <div className="oc-shape-full course-card-profile-image">
              <Image
                className="sidebar-logo"
                src={logoImage}
                alt="sidebar-logo"
                width={1200}
                height={500}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <span className="oc-typo-body-small course-card-author">Navier Ellie Trovi</span>
          </div>
          <div className="flex items-center">
            <OcIcon name="favorite"></OcIcon>
            <span className="">{course.courseId}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
