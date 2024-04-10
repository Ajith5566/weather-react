import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home(  ) {

    const [text, setText] = useState('');

    let navigate = useNavigate();

    // Event handler to update the state when the input value changes
    const handleInputChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
     };

     const search=async()=>{
        const countryName=text;
        console.log(countryName);
        
        if(countryName)
        {
             //api calling and data fetching
            const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=09eaebfd35b2ac600f555ffb08963dbb`);
            response.json().then((country)=>{
                console.log(country);


                let name=country.name;
                console.log(name);
                console.log(countryName);


                if (name && name.toLowerCase() === countryName.toLowerCase()){
                    //window.location=('/result');
                    navigate('/result', { state: { countryData: country } });
                    
                }
                else{
                    console.log('Invalid place');
                    toast.error('enter a valid place')
                }
            });

        } 
        else
        {
            toast.info('Enter the city name')
        }
     }
     

 
    
  return (
    <>
        <div className="row d-flex justify-content-center align-items-center " style={{backgroundColor:'black',minHeight:'100vh'}}>
                <div className="col-md-4"></div>
                <div className='col-md-4 '>
                    <div className=" rounded border d-flex justify-content-center align-items-center flex-column p-4 "style={{height:'400px'}}>
                        <h1 className='text-light text-center mb-4 '>Enter The Location...</h1>
                        <input type="text" className='form-control' placeholder='enter location' onChange={(e)=>handleInputChange(e)} />
                        <button className='btn btn-success mt-5 mt-md-3' onClick={search} >Search</button>
                    </div>
                </div>
                <div className="col-md-4"></div>
            
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={2000}/>
    </>
  )
}

export default Home