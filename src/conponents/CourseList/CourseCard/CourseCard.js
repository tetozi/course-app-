
import {Link} from 'react-router-dom'




const CourseCard = ({course}) => {
   
  return (
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
      <button className="card button"><Link  to={`/course/${course._id}`}> Details </Link></button> 
        <div className="card-footer">
          <div className="info">
            <div className="value">60</div>
            <div className="type">price</div>
          </div>
          <div className="info">
                    <div className="value">329</div>
                    <div className="type">comments</div>
                </div>
                <div className="info">
                    <div className="value">4.5</div>
                    <div className="type">rating</div>
                </div>
        </div>
        
      </div>
    </div>
  );
};

export default CourseCard;