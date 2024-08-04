import React from 'react';
import Indicator from '@/components/Indicator';

type CourseTitleProps = {
    courseTitle: string;
    category: string;
  };
  
export default function CourseTitle({ courseTitle, category }: CourseTitleProps) {
  return (
    <div
      title={courseTitle}
      aria-label={`${courseTitle} (${category})`}
      className="flex w-fit max-w-[300px] items-center gap-4 self-start justify-self-start md:w-[350px] md:self-center md:justify-self-center"
    >
      <Indicator type={category as 'Practical' | 'Theory'} />
      <span className="text-md md:text-md font-medium text-light-color dark:text-dark-color">
        {courseTitle}
      </span>
    </div>
  );
}
