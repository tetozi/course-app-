import { useState, useEffect } from 'react';
import * as courseService from '../../services/courseService'
import Loader from '../Loader/Loadimg';
import CourseCard from './CourseCard/CourseCard';


const CourseList = () => {
    const [course, setCourse] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        courseService.getAll()
            .then(result => {   
                setCourse(result);
                setTimeout(() => {
                    setIsLoading(true)
                  }, 4500);
               
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    return (
        
        <>
        
        {isLoading?
        
        <>
            {course.length > 0
                ? (
                    <ul className="overview">
                        {course.map(x => <CourseCard key={x._id} course={x} />)}
                    </ul>
                ) 
                : <p className="course-err-txt">No course in database!</p>
            }
            </>
        :<Loader />}
        </>
    );
}

export default CourseList;