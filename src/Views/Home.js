import React, { useEffect, useState } from 'react'
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Home() {
    const [data, setData] = useState(null)

    useEffect(()=> {
        axios.get('http://localhost:3030/api/info')
        .then(res => {
          const sortedData = res.data.data
          setData(sortedData);
        })
        .catch(err => console.log(err))
    }, []);
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //   fetch("http://localhost:3030/todoList")
    //     .then(response => response.json())
    //     .then(data => setData(data));
    // }, []);
    
  if (!data) {
    return <div>Loading...</div>;
  }



  return (
    <div className='home'>
        <div className='container'>

                {data.map((data,i) => (
                    <div key={i} className="card text-start mb-3">
                        
                        <div className="card-body">
                            <input type="checkbox" className='form-check-input' id="myCheckbox" />
                            <h5 className="card-title" id="myText">{data.todo}</h5>
                            <div className='flex-end'>
                            <Link to={`/update/${data.id}`}  className='btn btn-info ' ><i class="bi bi-pencil-square"></i></Link>
                            <button className='btn btn-danger mx-2' onClick={e => handleDelete(data.id)} ><i className="bi bi-trash"></i></button>
                            </div>
                            
                        </div>
                        
                    </div>

                ))} 


           
            
        </div>
    </div>
  )
  function handleDelete(id){
    const confirm = window.confirm("Would you like to Delete?")
    
    if(confirm){
        axios.delete('http://localhost:3030/api/delete/'+id)
        .then(res=>{
            alert("Record Deleted")
            window.location.reload()
        })
    }
    
  }
}


export default Home