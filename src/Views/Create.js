import axios from 'axios';
import React, { useState } from 'react'
import Home from './Home';
import '../App.css';


function Create() {
    const [inputData, setInputData] = useState({
        todo: ''
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3030/api/add', inputData)
        .then(res => {
            window.location.reload(2)
        })
    }
  return (
    <div className='container main-container'>
        <div className='header mt-3 text-center'>
            <h2 className='header-title'>TODO LIST</h2>
        </div>

        <form onSubmit={handleSubmit}>
        <div className='input_todo mb-3'>
            <input name="todo" className='form-control w-50' required
            onChange={e=> setInputData({...inputData,todo:e.target.value})}/>
            <button to="/create" className='btn btn-add mx-1'>Add</button>
        </div>
        </form>

        <Home />
    </div>
  )
}

export default Create