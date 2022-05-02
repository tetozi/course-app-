import { useState, useEffect } from 'react';
import * as cartService from '../../services/cartService'
import { useAuthContext } from '../../contexts/AuthContext'
import CourseCard from '../CourseList/CourseCard/CourseCard';


const User = () => {
    const [course, setCourse] = useState({});
    const { user } = useAuthContext();
    const [file, setFile] = useState()
   

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
    }, [user._id]);

    const photoInputChange = (e) => {
        setFile(e.target.files[0])
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        let token = user.token

        const formData = new FormData();
        formData.append('photo', file)
        console.log(formData)

        let response = await fetch(`http://localhost:5000/api/v1/users/updateUser`, {
            method: "PATCH",
            headers: {         
                'Authorization': `Bearer ${token}`
            },
            body: formData 
        })
        let jsonResult = await response.json();
        console.log(jsonResult);

    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type='file' name="photo" onChange={photoInputChange} />
                <button type="submit">Upload photo</button>
            </form>
            <h1>{user.username}</h1>
            <p>{user.photo}</p>

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