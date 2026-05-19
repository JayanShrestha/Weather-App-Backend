import { fetchByLocation, fetchByCoordinates, fetchlatlng } from "../services/weather.services.js";

export async function getWeatherByLocation(req, res){
    try{
        const location = req.body.location;
        if(!location || typeof location !== "string"){
            return res.status(400).json({ error: "Invalid location input" });
        }
        const weatherData = await fetchByLocation(location);
        res.json({data: weatherData});

    }
    catch(error){
        console.error("Failed to get weather by location:", error.message);
        res.status(500).json({ error: "Failed to get weather by location" });
    }

}

export async function getWeatherByCoordinates(req, res){
    try{
        const { latitude, longitude } = req.body;
        if(!latitude || typeof latitude !== "number" || !longitude || typeof longitude !== "number"){
            return res.status(400).json({ error: "Invalid coordinates input" });
        }
        const weatherData = await fetchByCoordinates(latitude, longitude);
        res.json({data: weatherData});
    }
    catch(err){
        console.error("Failed to get weather by coordinates:", err.message);
        res.status(500).json({ error: "Failed to get weather by coordinates" });
    }}

export async function getLatLng(req, res){
   try{   
    const location = req.body.location;
    const latLngData = await fetchlatlng(location);
    res.json({data: latLngData});
}
catch(err){
    console.error("Failed to get latitude and longitude:", err.message);
    res.status(500).json({ error: "Failed to get latitude and longitude" });
}}