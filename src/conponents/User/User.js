import { useState, useEffect } from 'react';
import * as cartService from '../../services/cartService'
import { useAuthContext } from '../../contexts/AuthContext'
import CourseCard from '../CourseList/CourseCard/CourseCard';
import './User.css'

const User = () => {
    const [course, setCourse] = useState({});
    const { user } = useAuthContext();
    const [file, setFile] = useState()
    const photo = user.photo
    console.log(photo);

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
          <div className='userPage' >
                
            <div className="sidebar">
                <h1 className='userName'>{user.username}</h1>
                <img className='userImage' src={`http://localhost:5000/static/images/users/${photo}`} alt="user" />
                <form onSubmit={onFormSubmit}>
                    <label for="photo" className="custom-file-upload">
                        <input type='file' name="photo" id='photo' onChange={photoInputChange} />
                        Custom Upload
                    </label>

                    <button className='takePHoto' type="submit">Upload photo</button>
                </form>
            </div>


            <div className='userCourse'>
            {course.length > 0
                ? (
                    <ul className="overview">
                        {course.map(x => <CourseCard key={x._id} course={x} />)}
                    </ul>
                )
                : <p className="course-err-txt">No course in database!</p>
            }
            </div>
            </div>

         
        </>


    )
}



export default User