import "./Course.css"
import { useParams, useNavigate, Link } from "react-router-dom";
import * as courseService from '../../../../services/courseService'

import { useEffect,  useState } from "react";

import Review from "../../../Review/Review";
import useFetchCourse from "../../../../hooks/useFetchCourse";
import { useAuthContext } from '../../../../contexts/AuthContext'


const CoursePage = () => {
  const [reviews, setReview] = useState({})
  const { courseId } = useParams();
  const { user } = useAuthContext()
  const [course] = useFetchCourse(courseId)
  const [message, setMessage] = useState({})


  

  useEffect(() => {
    courseService.getreviews(courseId)
      .then(reviews => {
        setReview(reviews)
      })
  }, [courseId])
  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.preventDefault();

    courseService.remove(courseId)
      .then((msg) => {
        alert(msg)
        navigate('/');
      });
  };
  const takeMessage = (e) => {
    setMessage(e.target.value);
  };
  const sendMessage = (e) => {
    e.preventDefault()
    let token = user.token
    
   
    courseService.sendMessage(courseId,message,token)
      .then(() => {
        setReview(state => [...state ,reviews] )
      })
  }

  return (
    
    
    <>
       <div className="coursePage">
        <div className="courseHeader"> <h2>{course.title}</h2>
        </div>
        <div className="content">
        <div className="courseImage"> <img src={course.imageUrl} alt="course" /></div>
            <div className="info">
                            

            <p className="containerContent">  {course.description} Does anyone else intentionally lose rivals every so often to stay in lower division. Way too sweaty the higher you get  </p>
            <p className="duration"> {course.duration} days</p>
            
            <button className="update-Btm"  ><Link to={`/cart/${courseId}`}> buy it now </Link> </button>
            </div>
          


        </div>

        <div className="footer">
          <button className="delete-Btn" onClick={deleteHandler} > Delete</button>
          <button className="update-Btm"  ><Link to={`/update/${courseId}`}>Update</Link> </button>
        </div>


      </div>
      <section >
        <div className="view">

      <h2 className="heading-secondary">Once you try it, you can't go back</h2>
          <textarea className="message" id="textarea" cols="30" rows="10" onChange={takeMessage}></textarea>
          <button className="sendMessage" onClick={sendMessage}>Send me </button>
        </div>
        <div className="testimonials-container">
          

          <div className="testimonials">
            <figure className="testimonial">
              {reviews.length > 0
                ? (
                  <div className="review-div">
                    {reviews.map(r => <Review key={r._id} review={r} />)}
                  </div>

                )
                : <p className="course-err-txt">No review in database!</p>
              }

            </figure>





          </div>
        </div>
      </section>

    </>
   
  );
};

export default CoursePage;