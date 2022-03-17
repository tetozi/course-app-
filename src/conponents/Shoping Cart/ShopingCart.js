import { useParams, Link,useNavigate } from "react-router-dom"
import useFetchCourse from "../../hooks/useFetchCourse"
import { useAuthContext } from '../../contexts/AuthContext'
import * as cartService from '../../services/cartService'
import "./ShopingCart.css"

const ShopingCart = () => {
  const { courseId } = useParams()
  const [course] = useFetchCourse(courseId)
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const addUser = (e) => {
    e.preventDefault()
   let id = user._id
   let customers = [...course.customers,id ]
   
   cartService.addCustomer(courseId,customers)
   .then(result => {
    navigate('/user');
    console.log(result)
   })
  }

  return (
    <>
        <div className="card-list">
          <div className="card">
            <p className="img">
              <img className="card-image" src={course.imageUrl} alt="tour" />
            </p>

            <div className="card-body">

              <span className="date">{course.duration} days</span>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
            
            <div className="card-footer">
              <div className="info">
              <button className="buyNow" onClick={addUser}>Buy Now</button>
              </div>
              <div className="info">
                
              </div>
              <div className="info">
              <button className="back"><Link  to={`/course/${course._id}`}> Details </Link></button>
              </div>
            </div>

          </div>
        </div>
   
  
    </>
  )
}

export default ShopingCart