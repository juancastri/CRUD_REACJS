import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom' 

function Read() {
    const {id} = useParams();
    const [student, setStudent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setStudent(res.data[0]);
        })
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <div>
            <div>
            <h2>Student Detail</h2>
                <h2>{student.ID}</h2>
                <h2>{student.Name}</h2>
                <h2>{student.Email}</h2>
            </div>
            <Link to ="/">Back</Link> 
            <Link to={`/edit/${student.ID}`}>Edit</Link>
        </div>
    </div>
  )
}

export default Read