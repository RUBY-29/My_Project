import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditStudent() {
  const { studentid } = useParams();
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [place, setplace] = useState("");
  const [phone, setphone] = useState("");
  const [validation, setvalidation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/students/${studentid}`)
      .then((res) => res.json())
      .then((data) => {
        setid(data.id);
        setname(data.name);
        setplace(data.place);
        setphone(data.phone);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [studentid]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData = { id, name, place, phone };

    fetch(`http://localhost:8000/students/${studentid}`,
      {
        method: 'PUT',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(studentData)
      }
    )
    .then((res) => {
      alert("STUDENT DATA UPDATED SUCCESSFULLY");
      navigate("/");
    })
    .catch((err) => console.log(err.message));
  }

  return (
    <div className="container">
      <center><h2>Edit Student Details</h2></center>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" required value={id}
          onChange={e => setid(e.target.value)}
          onMouseDown={() => setvalidation(true)} /><br />
        {id.length === 0 && validation && <span style={{ color: 'red' }}>please enter your id</span>}<br /> <br />
        <label htmlFor="id">Name:</label>
        <input type="text" id="name" name="name" required value={name}
          onChange={e => setname(e.target.value)}
          onMouseDown={() => setvalidation(true)} /><br />
        {name.length === 0 && validation && <span style={{ color: 'red' }}>please enter your name</span>}<br /> <br />
        <label htmlFor="id">PLACE:</label>
        <input type="text" id="place" name="place" required value={place}
          onChange={e => setplace(e.target.value)}
          onMouseDown={() => setvalidation(true)} /><br />
        {place.length === 0 && validation && <span style={{ color: 'red' }}>please enter your place</span>}<br /> <br />
        <label htmlFor="id">PHONE:</label>
        <input type="text" id="phone" name="phone" required value={phone}
          onChange={e => setphone(e.target.value)}
          onMouseDown={() => setvalidation(true)} /><br />
        {phone.length === 0 && validation && <span style={{ color: 'red' }}>please enter your phone number</span>}<br /> <br />
        <div>
          <button type="submit">Update</button>
          <button><Link to="/" className="btn btn-back">Back</Link></button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
