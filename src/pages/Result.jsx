import React from 'react'
import { useLocation } from 'react-router-dom';
function Result() {

  const location = useLocation();
  const countryData = location.state?.countryData;
  console.log(countryData);

  //temparature conversion
  let temp= countryData.main.temp;
  let celsiusValue = temp - 273.15;
  celsiusValue=celsiusValue.toFixed(2)
  console.log(celsiusValue);

  //storing wther Datails
  let weather=countryData.weather[0].main;
        console.log(weather);


  return (
    <>
      
        <div className='bg-success' style={{minHeight:'100vh'}}>
          <marquee behaviour='scroll' direction='left' >
            <h1 className='text-light '>Your Weather Report of <span className='text-warning'>{countryData.name}</span></h1>
          </marquee>
         <div className='text-center mt-3'>
            <div className="row d-flex justify-content-evenly ">
                  {/* assigning temaparature value */}
                <div className="col-md-4 border border-light rounded " style={{height:'250px',width:'250px'}}>
                  <h4 className='text-warning'>Temparature</h4>
                  <h1 style={{fontSize:'50px',marginTop:'50px'}} className='text-light'>{celsiusValue}C</h1>
                </div>
                {/* ASSIGNING WEATHER data */}
                <div className="col-md-4 border border-light rounded " style={{height:'250px',width:'250px'}}>
                    <h4 className='text-warning '>Weather</h4>
                    <h1 style={{fontSize:'35px',marginTop:'50px'}} className='text-light'>{weather}</h1>
                </div>
                {/* assigning humidty */}
                <div className="col-md-4 border border-light rounded" style={{height:'250px',width:'250px'}}>
                  <h4 className='text-warning '>Humidity</h4>
                  <h1 style={{fontSize:'50px',marginTop:'50px'}} className='text-light'>{countryData.main.humidity}%</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-evenly  mt-5 ">
              {/* wind  */}
                <div className="col-md-4 border border-light rounded" style={{height:'250px',width:'250px'}}>
                  <h4 className='text-warning'>Wind</h4>
                  <h1 style={{fontSize:'36px',marginTop:'50px'}} className='text-light'>{countryData.wind.speed}Km/hr</h1>
                </div>
                {/* country name */}
                <div className="col-md-4 border border-light rounded" style={{height:'250px',width:'250px'}}>
                  <h4 className='text-warning'>Country</h4>
                  <h1 style={{fontSize:'40px',marginTop:'50px'}} className='text-light'>{countryData.sys.country}</h1>
                </div>
                {/* pressure */}
                <div className="col-md-4 border border-light rounded" style={{height:'250px',width:'250px'}}>
                  <h4 className='text-warning'>Pressure</h4>
                  <h1 style={{fontSize:'35px',marginTop:'50px'}} className='text-light'>{countryData.main.pressure}mbar</h1>
                </div>
            </div>
         </div>
        
        </div>

    </>
  )
}

export default Result