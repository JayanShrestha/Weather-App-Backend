import { Router } from "express";
import { getWeatherByLocation, getWeatherByCoordinates, getLatLng } from "../controller/weather.controller.js";

const router = Router();

router.get("/", (req,res)=>{
    res.json("Welcome to the Weather App API");
});

router.post("/curweather",getWeatherByLocation);

router.post("/corweather", getWeatherByCoordinates);

router.post("/getlatlng", getLatLng);

export default router;
