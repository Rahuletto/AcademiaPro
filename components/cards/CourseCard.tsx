import styles from '@/styles/CourseCard.module.css';
import { Course } from '@/types/Course';
import { useEffect, useState } from 'react';


const grade_points: {
  [key: string]: number;
} = {
  O: 91,
  'A+': 81,
  A: 71,
  'B+': 61,
  B: 56,
  C: 50,
};

const CourseCard = ({course}: {course: Course}) => {  
  return (
    <>
        <div className={styles.card}>
            <div className={styles.courseTitle}>
                <div className={styles.courseName}>
                    <h3>{course.courseTitle}</h3>
                    <h4>Credit: {course.credit}</h4>
                </div>
            
                <div className={styles.courseCode}>
                    <h3>{course.courseCode}</h3>
                    
                    <h4>{course.roomNo}</h4>
                </div>
            </div>
            <div className={styles.facultyName}>
                <h4>{course.facultyName}</h4>
            </div>
        </div>
    </>
  );
};

export default CourseCard;
