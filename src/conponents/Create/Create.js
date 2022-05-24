import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext"

import * as courseService from "../../services/courseService"
import "./Create.css"



 

const Create = () => { 
    const navigate = useNavigate();
    const { user } = useAuthContext();

      const onCourseCreate = (e) => {
          e.preventDefault();
          let formData = new FormData(e.currentTarget);
        
          let token = user.token
          let title = formData.get('title');
          let description = formData.get('description');
          let imageUrl = formData.get('imageUrl');
          let duration = formData.get('duration');
            let course = {
            title,
            description,
            imageUrl,
            duration,
           
        } 
        console.log(course)
  
        courseService.create(course,token)
              .then(result => {
                  navigate('/');
              })
      }

    return(
        <div className="login-page">
        <div className="form">
            <form className="login-form" onSubmit={onCourseCreate} method="POST">
                <input type="text" placeholder="title" id="title" name="title" />
                <input
                    type="text"
                    placeholder="description"
                    id="description"
                    name="description"
                />
                <input
                    type="text"
                    placeholder="imageUrl"
                    id="imageUrl"
                    name="imageUrl"
                />
                 <input
                    type="text"
                    placeholder="duration"
                    id="duration"
                    name="duration"
                />
                <button type="submit" value="Create">
                   Create
                </button>
            </form>
        </div>
    </div>

    )
}


export default Create