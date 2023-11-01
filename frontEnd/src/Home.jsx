import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom' 

function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            location.reload();
        })
        .catch(err => console.log(err));
    }


  return (
    <div>
        <div>
            <h2>Student List</h2>
            <div>
                <Link to="/create">Create +</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) => {
                        return <tr key={index}>
                            <td>{student.ID}</td>
                            <td>{student.Name}</td>
                            <td>{student.Email}</td>
                            <td>
                                <Link to={`/read/${student.ID}`}>Read</Link>
                                <Link to={`/edit/${student.ID}`}>Edit</Link>
                                <button onClick={ () => handleDelete(student.ID) }>Delete</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home