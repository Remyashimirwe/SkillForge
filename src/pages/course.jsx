import { useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function Course() {
    const location = useLocation();
    const navigate = useNavigate();
    const course = location.state?.courseData;

    useEffect( () => {
        if(!course){
            navigate('/course');
        }
    },[course, navigate]);
    if (!course){
        return null
    }
    
    return(
        <div>
            <strong>{course.title}</strong>
        </div>
    )
}
export default Course;