import { error } from "ajv/dist/vocabularies/applicator/dependencies";
import { useState ,useEffect} from "react";
import { Link, useParams } from "react-router-dom";


function ViewStudent(){
  const {studentid} = useParams();
  const[studentData,setStudentData]=useState({})
  useEffect(()=>{
    fetch(`http://localhost:8000/students/${studentid}`)
  .then((res)=>res.json())
  .then((data)=>setStudentData(data))
  .catch((error)=>{console.log(error.messsages)})
  },[]);
  
    return(
    <div className="container">
     <center><h1>Student Details</h1>
     {studentData && <div className="details">
      <p><strong>ID:</strong>{studentData.id}</p>
      <p><strong>NAME:</strong>{studentData.name}</p>
      <p><strong>PLACE:</strong>{studentData.place}</p>
      <p><strong>PHONE:</strong>{studentData.phone}</p>
      </div>}
      <Link to="/" className="btn btn-back" style={{color:"red"}}>Back</Link>
      </center>
    </div>
    )
     }
     export default ViewStudent;