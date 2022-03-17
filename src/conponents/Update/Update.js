
import { useParams, useNavigate } from "react-router-dom";
import useFetchCourse from "../../hooks/useFetchCourse";
import * as courseService from "../../services/courseService"
import { toast } from "react-toastify";


const Update = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [course] = useFetchCourse(courseId);

  const updateHandler = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let title = formData.get("title");
    let description = formData.get("description");
    let duration = formData.get("duration");
    let imageUrl = formData.get("imageUrl");

    let course = {
      title,
      description,
      duration,
      imageUrl,
    };

    courseService.update(courseId, course).
      then(result => {
        toast.success('You are successfuly updated this course')
        navigate('/');
      }).catch(err => {
        toast.error(err)

      });
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" method="PUT" onSubmit={updateHandler}>
          <input
            type="text"
            placeholder="title"
            id="title"
            name="title"
            defaultValue={course.title}
          />
          <input
            type="text"
            placeholder="description"
            id="description"
            name="description"
            defaultValue={course.description}
          />
          <input
            type="text"
            placeholder="duration"
            id="duration"
            name="duration"
            defaultValue={course.duration}
          />
          <input
            type="text"
            placeholder="imageUrl"
            id="imageUrl"
            name="imageUrl"
            defaultValue={course.imageUrl}
          />
          <button type="submit" value="update">
            Update
          </button>
        </form>
      </div>
    </div>

  )
}


export default Update