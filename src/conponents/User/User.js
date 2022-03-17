import { useState, useEffect } from 'react';
import * as cartService from '../../services/cartService'
import { useAuthContext } from '../../contexts/AuthContext'
import CourseCard from '../CourseList/CourseCard/CourseCard';


const User = () => {
    const [course, setCourse] = useState({});
    const { user } = useAuthContext();

    useEffect(() => {
        cartService.getMyCourse(user._id)
            .then(result => {
                setCourse(
                   result
                )
                
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
  
    return (
        <>
            <h1>{user.username}</h1>
            <p>{user._id}</p>

            {course.length > 0
                ? (
                    <ul className="overview">
                        {course.map(x => <CourseCard key={x._id} course={x} />)}
                    </ul>
                ) 
                : <p className="course-err-txt">No course in database!</p>
            }
        </>
            

    )
}



export default User