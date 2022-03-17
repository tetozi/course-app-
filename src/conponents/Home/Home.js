import { Routes, Route } from "react-router-dom";
import CourseList from "../CourseList/CourseList";


const Home = () => {
    return(
       
      <Routes>
      <Route path="/" element={<CourseList />} />
    </Routes>
    )
}

export default Home