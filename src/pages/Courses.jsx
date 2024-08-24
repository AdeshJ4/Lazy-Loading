import React from 'react'
import CourseCard from '../components/CourseCard';

const Courses = () => {

    const courses = [10, 20, 30];
  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '500px'}}>
        {courses.map((c, i)=> <CourseCard key={i} />)}
    </div>
  )
}

export default Courses