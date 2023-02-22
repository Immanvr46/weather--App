import React from 'react'
import {  useState } from 'react';
import './weather.css';
import axios from 'axios';






const Weather = () => {

const [data,setData] = useState({})
  const [search, setSearch] = useState("")
   const [error,setError] =useState(false)
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7f1af5c29a6f227aefbf00c51c44c9b2`

const searchLocation=  async (e) => {
   if (e.key === 'Enter'){
     error && setError(false)
     setError(false);

     axios.get(url).then(res =>
      
      {
     setData(res.data)
    console.log("successfully")
  })
  .catch(() => setError(true)
  )
  
  

  setSearch("");
   } 
}




const dateBuilder = (d) =>{
  let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];

let day = days[d.getDay()];
let date =d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day}  ${date} ${month} ${year}`


}



  return (

    <div className="App">
  
      <main >
      <p>WEATHER REPORT</p>
<div className='search-box'>
  
  <input type="text" className="search-bar" placeholder='search here' onChange={(e) => setSearch(e.target.value)} value={search} onKeyDown={searchLocation}/>

  
</div>

<div className="error">{error && "Error: Location not found"}</div>
{!error && (
        <>
<div className='location-box'>

<div className='location'>{data.name} {data.sys ?<span>{data.sys.country}</span> : null}</div>


<div className='date'>{dateBuilder(new Date())}</div>

</div>
<div className=' weather-box'>
 {data.main ? <div className='temp'>{data.main.temp.toFixed()}°</div> : null }
  {data.weather ?<div className='weather'>{data.weather[0].main} </div> :null}
</div>
</>
      )}
     </main>
    
</div>
// https://api.openweathermap.org/data/2.5/weather?q=trichy&appid=7f1af5c29a6f227aefbf00c51c44c9b2
)
}

export default Weather;