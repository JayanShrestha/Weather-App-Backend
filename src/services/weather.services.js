import axios from "axios";
import env from "dotenv";

env.config();
const weatherAPI_URL = "https://api.openweathermap.org/data/2.5/forecast";
const geoAPI_URL = "http://api.openweathermap.org/geo/1.0/direct";
const googleAPIKey = process.env.key;
const geokey = process.env.api_key;

export async function fetchByLocation(location){
try{
    //var location = req.body.location; // requesting the value from location input
    const geocode = await axios.get(geoAPI_URL,{// Getting the geocode for the supplied location from geocoding api
        params:{
            q:location,
            appid:geokey,
        }
    });
    const result =(geocode.data);//All the information including lattitude and longitude are received as geocode.data in the form of array
    console.log(result);
    console.log(result[0].name);
    var latitude = result[0].lat;
    var longitude = result[0].lon;

    const weather_details = await axios.get(weatherAPI_URL,{// Getting the weather details by supplying coordinates from geocode
        params:{
            lat:latitude,
            lon:longitude,
            appid:geokey,
            units:"metric", //temperature comes in celsius
            
            
        }
    });
    
    console.log(weather_details.data);
    res.json({data:weather_details.data});// rendering the landing page with all the weather details and googleAPI key
}
catch(error){
  console.log("Failed to make connection:", error.message);
  res.render({error:error.message})
}
};

export async function fetchByCoordinates(latitude, longitude){
    try{
        //const latitude = req.body.latitude;
       // const longitude = req.body.longitude;
        const weather_details = await axios.get(weatherAPI_URL,{// Getting the weather details by supplying coordinates from geocode
        params:{
            lat:latitude,
            lon:longitude,
            appid:geokey,
            units:"metric", //temperature comes in celsius 
        }
    });
    res.json({data:weather_details.data});
}
catch(err){
    console.log("Failed to make connection:", err.message);
    res.json({error:err.message});
}
}

export async function fetchlatlng(location){
   try{   
    const geocode = await axios.get(geoAPI_URL,{// Getting the geocode for the supplied location from geocoding api
        params:{
            q:location,
            appid:geokey,
        }
    });
    const response = JSON.stringify(geocode.data);// converts the JSON objects to String value
    console.log(response);
    const result =(geocode.data);//All the information including lattitude and longitude are received as geocode.data in the form of array
    res.json({data:result});
}
catch(error){
    throw new Error (`Failed to fetch coordinates: ${error.message}`);
}
}