import React, {useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  
  const detailInitial = [];
  const [detail, setDetail] = useState(detailInitial);
  const [isLoading, setIsLoading] = useState(true);
        



    const user= async()=>{
    const response = await fetch(
      "http://localhost:8000/api/auth/getuser",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        },
      }
    )
      
      setIsLoading(false); 
    
    const json = await response.json();
     setDetail(json)
  
    }
    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem('token')){
       user();
      }
      else
      { 
        navigate("/login");

      }
      
    })
  
    

  return (
    <div>
      <div>
      {isLoading ? <div>Loading...</div> : <div></div>}
    </div>
    <div class="container">
      <div style={{textAlign:"center"}}>
        <h1 >WELCOME</h1>
      </div>
      <h3>YOU <strong>{detail.name}</strong> WILL BE TREATED AS A GOD</h3> 
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    
    </div> </div>
  )
}

export default Profile
