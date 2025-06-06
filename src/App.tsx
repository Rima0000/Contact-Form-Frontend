import React, { useState } from 'react'
import "./App.css";
import axios from 'axios';
const App: React.FC = () => {
  const [Values, setValues] = useState({
    name:"", 
    phone:"", 
    address:"", 
    state:"", 
    city:"", 
    message:""
  });

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = e.target;
    setValues({...Values, [name]: value});
  };

  const submit = async () => {
  
    if(
      Values.name === "" || 
      Values.phone === "" || 
      Values.address === "" || 
      Values.city === "" || 
      Values.state === "" || 
      Values.message === ""
    ){
      alert("All fields are required");
    }
    else{

       // await axios.post(`${window.location.origin}/api/v1/post`,Values).then((res) => {
       
      await axios.post("https://contact-form-backend-zoo0.onrender.com/api/v1/post",Values).then((res) => {
        alert(res.data.message);
      });

      setValues({
        name:"", 
        phone:"", 
        address:"", 
        state:"", 
        city:"", 
        message:""
      });
    }
  };

  return (
    
    <div className='main d-flex justify-content-center align-items-center'>

      <div className='card-contact px-3 py-2'>
        <center><h1>Contact Form</h1></center>
        <hr/>
        <div className='cont-form d-flex flex-column justify-content-around'>

          <div>
            <h5>Enter your name</h5>
            <input type="text" placeholder="Enter your name" name="name" value={Values.name} onChange={change} />
          </div>

          <div>
            <h5>Enter your phone number</h5>
            <input type="text" placeholder="Enter your phone number" name="phone" value={Values.phone} onChange={change}/>
          </div>

          <div>
            <h5>Address</h5>
            <textarea placeholder="Enter your address" name="address" value={Values.address} onChange={change} />
          </div>
          
          <div className='imp-data d-flex justify-content-between'>

            <div>
              <h5>City</h5>
            <input id="imp" type="text" placeholder="Enter your city" name="city" value={Values.city} onChange={change} />
            </div>

            <div>
              <h5>State</h5>
            <input id="imp" type="text" placeholder="Enter your state" name="state" value={Values.state} onChange={change} />
            </div>

          </div>

            <div>      
              <h5>Message</h5>
              <textarea placeholder="Enter your message" name="message" value={Values.message} onChange={change} />
            </div> 

            <div>
            <button className='btn btn-primary' onClick={submit}>Save</button>
            </div>

          </div>
        </div>
      </div>
   
  )
}

export default App;