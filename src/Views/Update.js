import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';


function Update() {
    const {id} = useParams();

    const [inputData, setInputData] = useState({
        id: id,
        todo:''
    });

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3030/api/info/'+id)
            .then(res => setInputData(res.data.data))
            .catch(err => console.log(err))
    }, [id]);

    const handleSubmit =  (event) => {
        event.preventDefault();
        try {
             axios.put('http://localhost:3030/api/update/'+id , inputData);
            alert("Data Updated Successfully!");
            navigate('/');
        } catch (error) {
            console.error(error);
            alert("Failed to update data. Please try again later.");
        }
    };
  return (
    <div className='container main-container'>
        <div className='header mt-3 text-center'>
            <h2 className='header-title'>TODO LIST</h2>
        </div>

        <form onSubmit={handleSubmit}>
        <div className='input_todo mb-3'>
            <input name="todo" className='form-control w-50' value={inputData.todo} required
            onChange={e=> setInputData({...inputData,todo:e.target.value})}/>
            <button to="/create" className='btn btn-add mx-1'>Update</button>
        </div>
        </form>
    </div>
  )
}

export default Update